import { Card, Col, Row } from "antd";

const { Meta } = Card;

// 定义卡片数据数组
const cardData = [
  {
    title: "标题1",
    description: "标题1标题1标题1",
    imageUrl:
      "https://images.pexels.com/photos/30650213/pexels-photo-30650213.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "标题2",
    description: "标题2",
    imageUrl:
      "https://images.pexels.com/photos/30650213/pexels-photo-30650213.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "标题3",
    description: "标题3",
    imageUrl:
      "https://images.pexels.com/photos/30650213/pexels-photo-30650213.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

const MainProductList = () => (
  <Row gutter={16}>
    {cardData.map((item, index) => (
      <Col key={index} span={8}>
        <Card
          hoverable
          style={{ width: 400 }}
          cover={<img alt="example" src={item.imageUrl} />}
        >
          <Meta title={item.title} description={item.description} />
        </Card>
      </Col>
    ))}
  </Row>
);

export default MainProductList;
