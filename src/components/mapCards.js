import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Button
  } from "@material-tailwind/react";

import TwoD from './cards/twoD';
import TwoFiveD from './cards/twofiveD';
import ThreeD from './cards/threeD';
  
const MapCards = () => {

    const data = useStaticQuery(graphql`query 
        {
            file: allFile(
                filter: {sourceInstanceName: {eq: "images"}}
            ) {
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
    `);

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);

    const [open1, setOpen1] = useState(false);
    const handleOpen1 = () => setOpen1(!open1);

    const [open2, setOpen2] = useState(false);
    const handleOpen2 = () => setOpen2(!open2);

    const img3d = getImage(data.file.edges.find(value => value.node.name === '3d').node)
    const img25d = getImage(data.file.edges.find(value => value.node.name === '25d').node)
    const img2d = getImage(data.file.edges.find(value => value.node.name === '2d').node)

    return <div className='flex flex-wrap justify-center mb-24'>
        <Card className="mt-4 mb-10 ml-2 mr-2 w-96 bg-blue-gray-700 cursor-pointer" onClick={handleOpen}>
            <CardHeader floated={false} className="h-80">
                <GatsbyImage image={img2d} layout="fixed" />
            </CardHeader>
            <CardBody className="text-center">
                <Typography variant="h4" color="white" className="mb-1">
                2D
                </Typography>
            </CardBody>
        </Card>
        <Dialog
            open={open}
            handler={handleOpen}
            size='xl'
            animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0.9, y: -100 },
            }}
        >
            <DialogHeader>2D</DialogHeader>
            <DialogBody divider className="h-[40rem] overflow-scroll">
                <TwoD />
            </DialogBody>
            <DialogFooter>
                <Button variant="gradient" onClick={handleOpen}>
                    <span>종료</span>
                </Button>
            </DialogFooter>
        </Dialog>
        <Card className="mt-4 mb-10 ml-2 mr-2 w-96 bg-blue-gray-700 cursor-pointer" onClick={handleOpen1}>
            <CardHeader floated={false} className="h-80">
                <GatsbyImage image={img25d} layout="fixed" />
            </CardHeader>
            <CardBody className="text-center">
                <Typography variant="h4" color="white" className="mb-1">
                2.5D
                </Typography>
            </CardBody>
        </Card>
        <Dialog
            open={open1}
            handler={handleOpen1}
            size='xl'
            animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0.9, y: -100 },
            }}
        >
            <DialogHeader>2.5D</DialogHeader>
            <DialogBody divider className="h-[40rem] overflow-scroll">
                <TwoFiveD />
            </DialogBody>
            <DialogFooter>
                <Button variant="gradient" onClick={handleOpen1}>
                    <span>종료</span>
                </Button>
            </DialogFooter>
        </Dialog>
        <Card className="mt-4 mb-10 ml-2 mr-2 w-96 bg-blue-gray-700 cursor-pointer" onClick={handleOpen2}>
            <CardHeader floated={false} className="h-80">
                <GatsbyImage image={img3d} layout="fixed" />
            </CardHeader>
            <CardBody className="text-center">
                <Typography variant="h4" color="white" className="mb-1">
                3D
                </Typography>
            </CardBody>
        </Card>
        <Dialog
            open={open2}
            handler={handleOpen2}
            size='xl'
            animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0.9, y: -100 },
            }}
        >
            <DialogHeader>3D</DialogHeader>
            <DialogBody divider className="h-[40rem] overflow-scroll">
                <ThreeD />
            </DialogBody>
            <DialogFooter>
                <Button variant="gradient" onClick={handleOpen2}>
                    <span>종료</span>
                </Button>
            </DialogFooter>
        </Dialog>
    </div>
};

export default MapCards;