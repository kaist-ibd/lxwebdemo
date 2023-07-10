import React from "react"
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  Typography,
  List,
  ListItem,
  ListItemSuffix,
  Chip,
  Popover,
  PopoverHandler,
  PopoverContent,
} from "@material-tailwind/react"

const OverallStats = () => {
  return (
    <div className="max-w-7xl mx-auto flex justify-center">
      <Card className="mt-6 w-[480px]">
        <CardBody>
          <Typography
            variant="h5"
            color="blue-gray"
            className="mb-4 mt-2 flex justify-center"
          >
            데이터 수집 현황
          </Typography>
          <List>
            <ListItem>
              참여자
              <ListItemSuffix>
                <Chip
                  value="237명"
                  variant="ghost"
                  size="sm"
                  className="rounded-full"
                />
              </ListItemSuffix>
            </ListItem>
            <Popover
              animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0, y: 25 },
              }}
            >
              <PopoverHandler>
                <ListItem>
                  누적 접속 시간
                  <ListItemSuffix>
                    <Chip
                      value="266시간 26분 48초"
                      variant="ghost"
                      size="sm"
                      className="rounded-full"
                    />
                  </ListItemSuffix>
                </ListItem>
              </PopoverHandler>
              <PopoverContent>
                인당 평균 접속 시간: 1시간 7분 27초
              </PopoverContent>
            </Popover>
            <Popover
              animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0, y: 25 },
              }}
            >
              <PopoverHandler>
              <ListItem>
              기본 로그 데이터
              <ListItemSuffix>
                <Chip
                  value="729,479개"
                  variant="ghost"
                  size="sm"
                  className="rounded-full"
                />
              </ListItemSuffix>
            </ListItem>
              </PopoverHandler>
              <PopoverContent>
                1초마다 참여자의 위치, 시야, 보고 있는 것(ray-tracing)을 기록
              </PopoverContent>
            </Popover>
            <Popover
              animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0, y: 25 },
              }}
            >
              <PopoverHandler>
              <ListItem>
              카메라 데이터
              <ListItemSuffix>
                <Chip
                  value="5,552개"
                  variant="ghost"
                  size="sm"
                  className="rounded-full"
                />
              </ListItemSuffix>
            </ListItem>
              </PopoverHandler>
              <PopoverContent>
                참여자가 인상깊은 곳에서 부여된 카메라 아이템을 사용 
              </PopoverContent>
            </Popover>
            <Popover
              animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0, y: 25 },
              }}
            >
              <PopoverHandler>
                <ListItem>
                  상호작용 데이터
                  <ListItemSuffix>
                    <Chip
                      value="15,973개"
                      variant="ghost"
                      size="sm"
                      className="rounded-full"
                    />
                  </ListItemSuffix>
                </ListItem>
              </PopoverHandler>
              <PopoverContent>
                공간요소, 액티비티, NPC와의 참여자 상호작용
              </PopoverContent>
            </Popover>
          </List>
        </CardBody>
        <CardFooter className="pt-0 flex justify-center">
          <Badge color="green">
            <Button>테스트 서버: Online</Button>
          </Badge>
        </CardFooter>
      </Card>
    </div>
  )
}

export default OverallStats
