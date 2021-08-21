import "semantic-ui-css/semantic.min.css";
import {
  List,
  Loader,
  Dimmer,
  Placeholder,
  Segment,
  Image,
  Grid,
  Form,
  Button,
  Divider,
  Icon,
  Input,
  Search,
  Header,
  Table,
  Container,
  Label,
  Menu,
  Feed,
  Comment,
} from "semantic-ui-react";

function App() {
  return (
    <div>
      <br />
      <Container>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell textAlign="right" colSpan="3">
                <Search placeholder="Search document..." />
              </Table.HeaderCell>
            </Table.Row>
            <Table.Row textAlign="center">
              <Table.HeaderCell>Nama Document</Table.HeaderCell>
              <Table.HeaderCell>Jenis File</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>
                <Label ribbon>Panduan Belajar Javascript</Label>
              </Table.Cell>
              <Table.Cell>PDF</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Panduan Belajar CSS</Table.Cell>
              <Table.Cell>PDF</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Panduan Belajar React JS</Table.Cell>
              <Table.Cell>PDF</Table.Cell>
            </Table.Row>
          </Table.Body>
          <Table.Footer>
            <Table.Row>
              <Table.HeaderCell colSpan="3" textAlign="right">
                <Menu pagination>
                  <Menu.Item icon="chevron left" />
                  <Menu.Item name="1" />
                  <Menu.Item name="2" />
                  <Menu.Item name="3" />
                  <Menu.Item name="4" />
                  <Menu.Item icon="chevron right" />
                </Menu>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table>
      </Container>
      <br />
      <Container>
        <Grid columns={2}>

          <Grid.Column width="5" floated="left">
            <Comment.Group threaded >
              <Header as="h3" dividing>
                Comments
              </Header>

              <Comment>
                <Comment.Avatar
                  as="a"
                  src="https://react.semantic-ui.com/images/avatar/small/matt.jpg"
                />
                <Comment.Content>
                  <Comment.Author as="a">Satria</Comment.Author>
                  <Comment.Metadata>
                    <div>Today at 5:42PM</div>
                  </Comment.Metadata>
                  <Comment.Text>
                    <p>Hallo..!</p>
                  </Comment.Text>
                  <Comment.Actions>
                    <Comment.Action>Reply</Comment.Action>
                  </Comment.Actions>
                </Comment.Content>
              </Comment>

              <Comment>
                <Comment.Avatar
                  as="a"
                  src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg"
                />
                <Comment.Content>
                  <Comment.Author as="a">Danang</Comment.Author>
                  <Comment.Metadata>
                    <div>Today at 5:50PM</div>
                  </Comment.Metadata>
                  <Comment.Text>
                    <p>Kerjakan Sesuatu Semampu Kamu...</p>
                  </Comment.Text>
                  <Comment.Actions>
                    <Comment.Action>Reply</Comment.Action>
                  </Comment.Actions>
                </Comment.Content>

                <Comment.Group>
                  <Comment>
                    <Comment.Avatar
                      as="a"
                      src="https://react.semantic-ui.com/images/avatar/small/jenny.jpg"
                    />
                    <Comment.Content>
                      <Comment.Author as="a">Ricky</Comment.Author>
                      <Comment.Metadata>
                        <div>Just now</div>
                      </Comment.Metadata>
                      <Comment.Text>
                        <p>Kamu Sekarang Dimana Danang?</p>
                      </Comment.Text>
                      <Comment.Actions>
                        <Comment.Action>Reply</Comment.Action>
                      </Comment.Actions>
                    </Comment.Content>
                  </Comment>
                </Comment.Group>
              </Comment>

              <Comment>
                <Comment.Avatar as="a" src="https://react.semantic-ui.com/images/avatar/small/joe.jpg" />
                <Comment.Content>
                  <Comment.Author as="a">Joe</Comment.Author>
                  <Comment.Metadata>
                    <span>1 days ago</span>
                  </Comment.Metadata>
                  <Comment.Text>
                    <p>Terimakasih Atas Nasihat Nya</p>
                  </Comment.Text>
                  <Comment.Actions>
                    <Comment.Action>Reply</Comment.Action>
                  </Comment.Actions>
                </Comment.Content>
              </Comment>

              <Form reply>
                <Form.TextArea/>
                <Button content="Add Reply" icon="edit" primary labelPosition='left'/>
              </Form>

            </Comment.Group>
          
          </Grid.Column>
          <Grid.Column width="5" floated="right">
            <Feed>
              <Feed.Event>
                <Feed.Label>
                  <img src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg" />
                </Feed.Label>
                <Feed.Content>
                  <Feed.Summary>
                    <Feed.User>Anton</Feed.User> added you as a friend
                    <Feed.Date>3 Hour Ago</Feed.Date>
                  </Feed.Summary>
                  <Feed.Meta>
                    <Feed.Like>
                      <Icon name="like" />4 Likes
                    </Feed.Like>
                  </Feed.Meta>
                </Feed.Content>
              </Feed.Event>

              <Feed.Event>
                <Feed.Label>
                  <Icon name="pencil alternate" />
                </Feed.Label>
                <Feed.Content>
                  <Feed.Summary>
                    You submitted a new post to the page
                    <Feed.Date>3 days ago</Feed.Date>
                  </Feed.Summary>
                  <Feed.Extra text>
                    Saya Senang Belajar Bahasa Pemrograman
                  </Feed.Extra>
                  <Feed.Meta>11 Likes</Feed.Meta>
                </Feed.Content>
              </Feed.Event>

              <Feed.Event>
                <Feed.Label>
                  <img src="https://react.semantic-ui.com/images/avatar/small/helen.jpg" />
                </Feed.Label>
                <Feed.Content>
                  <Feed.Date>4 days ago</Feed.Date>
                  David added 2 new Image
                  <Feed.Extra images>
                    <a>
                      <img src="https://s3-ap-southeast-1.amazonaws.com/niomic/img-v1/c_login_logo.png" />
                    </a>
                    <a>
                      <img src="https://cdn-images-1.medium.com/max/1600/1*6kK9j74vyOmXYm1gN6ARhQ.png" />
                    </a>
                  </Feed.Extra>
                  <Feed.Meta>
                    <Feed.Like>
                      <Icon name="like" />2 Likes
                    </Feed.Like>
                  </Feed.Meta>
                </Feed.Content>
              </Feed.Event>
            </Feed>
          </Grid.Column>
        </Grid>
      </Container>
      <br />
    </div>
  );
}

export default App;
