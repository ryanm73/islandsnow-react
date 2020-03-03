import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Header, Menu, Dropdown, Icon, Image, Segment, Grid, Divider, List, Input, Button } from 'semantic-ui-react';

class TopMenu extends React.Component {
  render() {
    return (
        <Menu borderless className="topmenu">
          <Container>
            <Menu.Item fitted><Icon name="facebook f" /></Menu.Item>
            <Menu.Item fitted><Icon name="twitter" /></Menu.Item>
            <Menu.Item fitted><Icon name="pinterest" /></Menu.Item>
            <Menu.Item fitted><Icon name="instagram" /></Menu.Item>
            <Menu.Item fitted position="right"><Icon name="home" /></Menu.Item>
            <Menu.Item fitted><Icon name="search" /></Menu.Item>
            <Menu.Item fitted><Icon name="user" /></Menu.Item>
            <Dropdown item text="MY CART 0" icon="shop">
              <Dropdown.Menu>
                <Dropdown.Item>My cart is currently empty.</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Container>
        </Menu>
    )
  }
}

class IslandSnowLogo extends React.Component {
  render() {
    return (
        <Image src='http://courses.ics.hawaii.edu/ics314s20/morea/ui-frameworks/experience-islandsnow-logo.png' centered/>
    )
  }
}

class MiddleMenu extends React.Component {
  render() {
    return (
          <Container>
            <Grid centered style={{margin: '5px'}}>
              <Menu borderless className="middlemenu">
            <Dropdown item text="MEN">
              <Dropdown.Menu>
                <Dropdown.Item>Dropdown filler</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown item text="WOMEN">
              <Dropdown.Menu>
                <Dropdown.Item>Dropdown filler</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown item text="KIDS">
              <Dropdown.Menu>
                <Dropdown.Item>Dropdown filler</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown item text="BRANDS">
              <Dropdown.Menu>
                <Dropdown.Item>Dropdown filler</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Menu.Item>SALES</Menu.Item>
              </Menu>
            </Grid>
          </Container>
    )
  }
}

class FullWidthImage extends React.Component {
  render() {
    return (
        <Image src='http://courses.ics.hawaii.edu/ics314s20/morea/ui-frameworks/experience-islandsnow-video-snapshot.png' fluid />
    )
  }
}

class FooterMenu extends React.Component {
  render() {
    return (
        <Container>
          <Grid style={{margin:'10px'}}>
            <Grid.Row columns={3}>
              <Grid.Column>
                About Us <br/>
                Store Locations <br/>
                Employment <br/>
                Videos <br/>
                Shipping & Returns <br/>
                Privacy Policy
              </Grid.Column>
              <Grid.Column>
                Men <br/>
                Women <br/>
                Kids <br/>
                Brands <br/>
                Sale <br/>
              </Grid.Column>
              <Grid.Column>
                Join our mailing list for updates <br/>
                Sign up to receive our email updates! <br/>
                <Input placeholder='Enter email address'/><Button color='black'>Join</Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
    )
  }
}

class IslandSnow extends React.Component {

  render() {
    return (
        <div>
          <TopMenu/>
          <IslandSnowLogo/>
          <MiddleMenu/>
          <FullWidthImage/>
          <FooterMenu/>
        </div>
    );
  }
}

ReactDOM.render(<IslandSnow/>, document.getElementById('root'));