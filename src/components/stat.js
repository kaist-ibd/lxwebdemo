import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Paint from "./cards/paint"

const CustomStatCard = ({ text, name, image, size }) => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(!open)

  const data = useStaticQuery(graphql`
    query {
      file: allFile(filter: { sourceInstanceName: { eq: "images" } }) {
        edges {
          node {
            name
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  `)

  const img = getImage(
    data.file.edges.find(value => value.node.name === image).node
  )

  return (
    <>
      <Dialog
        open={open}
        handler={handleOpen}
        size={size}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogHeader>{name}</DialogHeader>
        <DialogBody divider className="h-[40rem] overflow-scroll">
          {image === "paint" ? (
            <Paint />
          ) : null}
        </DialogBody>
        <DialogFooter>
          <Button variant="outlined" color="gray" onClick={handleOpen}>
            <span className="text-gray-800 text-sm">종료</span>
          </Button>
        </DialogFooter>
      </Dialog>
      <Card className="mt-4 mb-10 ml-2 mr-2 w-96 cursor-pointer" onClick={handleOpen}>
        <CardHeader color="blue-gray" className="relative h-56" floated={false}>
          <GatsbyImage image={img} layout="fixed" />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {name}
          </Typography>
          <Typography>{text}</Typography>
        </CardBody>
      </Card>
    </>
  )
}

export default CustomStatCard
