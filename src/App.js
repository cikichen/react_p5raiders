import React from "react";
import { Carousel, Grid, TabBar } from "antd-mobile";
import { connect } from "react-redux";
import { simpleAction } from "./actions/SimpleAction";

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
});

const data = Array.from(new Array(8)).map((_val, i) => ({
  icon: "https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png",
  text: `name${i}`
}));

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: "redTab",
      hidden: false,
      fullScreen: true,
      data: ["1", "2", "3"],
      imgHeight: 200
    };
  }

  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: [
          "AiyWuByWklrrUDlFignR",
          "TekJlZRVCjLFexlOCuWn",
          "IJOtIlfsYdTyaDTRVrLI"
        ]
      });
    }, 100);
  }

  renderContent(pageText) {
    return (
      <div
        style={{
          backgroundColor: "white",
          height: "100%",
          textAlign: "center"
        }}
      >
        <Carousel
          autoplay={true}
          infinite
          beforeChange={(from, to) =>
            console.log(`slide from ${from} to ${to}`)
          }
          afterChange={index => console.log("slide to", index)}
        >
          {this.state.data.map(val => (
            <a
              key={val}
              href="http://www.alipay.com"
              style={{
                display: "inline-block",
                width: "100%",
                height: this.state.imgHeight
              }}
            >
              <img
                src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                alt=""
                style={{ width: "100%", verticalAlign: "top", height: 200 }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event("resize"));
                  this.setState({ imgHeight: "auto" });
                }}
              />
            </a>
          ))}
        </Carousel>
        <Grid data={data} columnNum={3} />
      </div>
    );
  }

  render() {
    return (
      <div
        style={
          this.state.fullScreen
            ? {
                position: "fixed",
                height: "100%",
                width: "100%",
                top: 0
              }
            : { height: 400 }
        }
      >
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={this.state.hidden}
        >
          <TabBar.Item
            title="Life"
            key="Life"
            icon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background:
                    "url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat"
                }}
              />
            }
            selectedIcon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background:
                    "url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat"
                }}
              />
            }
            selected={this.state.selectedTab === "blueTab"}
            badge={1}
            onPress={() => {
              this.setState({
                selectedTab: "blueTab"
              });
            }}
            data-seed="logId"
          >
            {this.renderContent("Life")}
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background:
                    "url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat"
                }}
              />
            }
            selectedIcon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background:
                    "url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat"
                }}
              />
            }
            title="Koubei"
            key="Koubei"
            badge={"new"}
            selected={this.state.selectedTab === "redTab"}
            onPress={() => {
              this.setState({
                selectedTab: "redTab"
              });
            }}
            data-seed="logId1"
          >
            {this.renderContent("Koubei")}
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background:
                    "url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat"
                }}
              />
            }
            selectedIcon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background:
                    "url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat"
                }}
              />
            }
            title="Friend"
            key="Friend"
            dot
            selected={this.state.selectedTab === "greenTab"}
            onPress={() => {
              this.setState({
                selectedTab: "greenTab"
              });
            }}
          >
            {this.renderContent("Friend")}
          </TabBar.Item>
          <TabBar.Item
            icon={{
              uri:
                "https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg"
            }}
            selectedIcon={{
              uri:
                "https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg"
            }}
            title="My"
            key="my"
            selected={this.state.selectedTab === "yellowTab"}
            onPress={() => {
              this.setState({
                selectedTab: "yellowTab"
              });
            }}
          >
            {this.renderContent("My")}
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
