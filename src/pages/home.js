import React from 'react';
import {observer, inject} from 'mobx-react';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import Index from './index/index';
import SlotGame from './slot/slot';
import Lottery from './lottery/lottery';
import Activity from './activity/activity';
import Agent from './agent/agent';
import Fish from './fish/fish';
import Lhc from './lhc/lhc';
import Live from './live/live';
import Personal from './personal/personal';
import Poker from './poker/poker';
import Sport from './sport/sport';
import Login from './login/login';
import Register from './register/register';


@withRouter
@inject("routerStore")
@observer
class Home extends React.Component {
    constructor(props) {
        super(props)
        // 没有super(props), 后面使用回报错
        // 定义state
        // bind方法
        // 其他初始化工作
        this.props.routerStore.history = this.props.history
    }

    componentWillMount() {
        // 服务器渲染的唯一hook
    }

    componentDidMount() {
        // 可以调用setState， render Component
    }

    render() {
        return (
            <div className="Home">
                <Switch>
                    <Route path="/index" component={Index}/>
                    <Route path="/lottery" component={Lottery}/>
                    <Route path="/activity" component={Activity}/>
                    <Route path="/agent" component={Agent}/>
                    <Route path="/fish" component={Fish}/>
                    <Route path="/slot" component={SlotGame}/>
                    <Route path="/lhc" component={Lhc}/>
                    <Route path="/live" component={Live}/>
                    <Route path="/personal" component={Personal}/>
                    <Route path="/poker" component={Poker}/>
                    <Route path="/sport" component={Sport}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/register" component={Register}/>
                    <Route path="/" component={Index} exact/>
                    <Redirect to={"/"}/>
                </Switch>
            </div>
        );
    }
}

export default Home;