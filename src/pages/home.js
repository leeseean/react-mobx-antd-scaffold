import React from 'react';
import {observer, inject} from 'mobx-react';
import Loadable from 'react-loadable';
import GlobalLoading from '../components/globalLoading';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
/* import Index from './index/index';
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
import Register from './register/register'; */

const RouteConfig = [
    {
        path: '/',
        component: Loadable({
            loader: () => import ('./login/login'),
            loading: GlobalLoading
        }),
        name: '登陆页',
        exact: true
    }, {
        path: '/index',
        component: Loadable({
            loader: () => import ('./index/index'),
            loading: GlobalLoading
        }),
        name: '首页'
    }, {
        path: '/lottery',
        component: Loadable({
            loader: () => import ('./lottery/lottery'),
            loading: GlobalLoading
        }),
        name: '彩票'
    }, {
        path: '/activity',
        component: Loadable({
            loader: () => import ('./activity/activity'),
            loading: GlobalLoading
        }),
        name: '活动页'
    }, {
        path: '/agent',
        component: Loadable({
            loader: () => import ('./agent/agent'),
            loading: GlobalLoading
        }),
        name: '代理中心'
    }, {
        path: '/fish',
        component: Loadable({
            loader: () => import ('./fish/fish'),
            loading: GlobalLoading
        }),
        name: '捕鱼王'
    }, {
        path: '/slot',
        component: Loadable({
            loader: () => import ('./slot/slot'),
            loading: GlobalLoading
        }),
        name: '老虎机'
    }, {
        path: '/lhc',
        component: Loadable({
            loader: () => import ('./lhc/lhc'),
            loading: GlobalLoading
        }),
        name: '六合彩'
    }, {
        path: '/live',
        component: Loadable({
            loader: () => import ('./live/live'),
            loading: GlobalLoading
        }),
        name: '真人娱乐'
    }, {
        path: '/personal',
        component: Loadable({
            loader: () => import ('./personal/personal'),
            loading: GlobalLoading
        }),
        name: '个人中心'
    }, {
        path: '/poker',
        component: Loadable({
            loader: () => import ('./poker/poker'),
            loading: GlobalLoading
        }),
        name: '棋牌'
    }, {
        path: '/sport',
        component: Loadable({
            loader: () => import ('./sport/sport'),
            loading: GlobalLoading
        }),
        name: '体育'
    }, {
        path: '/login',
        component: Loadable({
            loader: () => import ('./login/login'),
            loading: GlobalLoading
        }),
        name: '登陆'
    }, {
        path: '/register',
        component: Loadable({
            loader: () => import ('./register/register'),
            loading: GlobalLoading
        }),
        name: '注册'
    }
];

@withRouter
@inject("routerStore")
@observer
class Home extends React.Component {
    constructor(props) {
        super(props)
        // 没有super(props), 后面使用回报错 定义state bind方法 其他初始化工作
        this.props.routerStore.history = this.props.history
    }

    componentWillMount() {
        // 服务器渲染的唯一hook
    }

    componentDidMount() {
        // 可以调用setState， render Component
    }

    render() {
        const Routes = () => {
            return RouteConfig.map((route, index) => {
                return (<Route
                    key={index}
                    path={route.path}
                    component={route.component}
                    exact={route.exact}/>)
            });
        };
        return (
            <div className="Home">
                <Switch>
                    <Routes/>
                    <Redirect to={"/"}/>
                </Switch>
            </div>
        );
    }
}

export default Home;