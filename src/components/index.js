@withRouter
@observer
class Home extends React.Component {
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
                    <Route path="/login" component={Login}/>
                    <Route path="/gp" component={Group}/>
                    <Route path="/" component={Main}/>
                    <Redirect to={"/"}/>
                </Switch>
            </div>
        );
    }
}