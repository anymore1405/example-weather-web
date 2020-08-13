import React, { useState, useEffect } from "react";
import { getDataWeather } from "./api";
import { Layout, Space, Card, Typography, Col, Row, Divider, List } from "antd";
import { Data } from "./interfaces";
import Lottie from "lottie-react";
import moment from "moment";
import { weatherIcon } from "./configs/weather.icon";
const { Content, Header, Footer } = Layout;
const { Title, Text } = Typography;

function App() {
  const [data, setData] = useState<Data[]>([]);
  useEffect(() => {
    getDataWeather((d) => {
      setData(d);
    });
  }, []);
  return (
    <Layout style={{ backgroundColor: "white" }}>
      <Header
        style={{ backgroundColor: "white", boxShadow: "0px 0px 10px #b2dfdb" }}
      >
        <Title>Weather Example</Title>
      </Header>
      <Divider orientation="left">Dự báo thời tiết 12h tiếp theo</Divider>
      <Content style={{ margin: 10 }}>
        <Space direction="horizontal" size={"large"} align={"center"}>
          <List
            dataSource={data}
            grid={{ gutter: 16, column: 6 }}
            renderItem={(item) => {
              return (
                <List.Item>
                  <Card
                    bordered={true}
                    title={item.Temperature.Value + " °C"}
                    style={{ width: 300 }}
                    hoverable={true}
                    extra={<p>{moment(item.DateTime).fromNow()}</p>}
                  >
                    <Text>{item.IconPhrase}</Text>
                    <Lottie animationData={weatherIcon[item.WeatherIcon]} />
                  </Card>
                </List.Item>
              );
            }}
          />
        </Space>
      </Content>
    </Layout>
  );
}

export default App;
