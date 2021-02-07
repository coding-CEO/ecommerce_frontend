import React from 'react';
import { Category } from '../../interfaces/Category';
import { createBrowserHistory } from 'history';

interface Props {
    category: Category;
}

class Tab extends React.Component<Props, any> {

    constructor(props: Props) {
        super(props);
        this.handleTabClick.bind(this);
    }

    handleTabClick = (): void => {
        // TODO: handle the issue of category and
        // try to generalize route changing
        let route: string = `/category/${this.props.category.title}`
        let routeState: Object = {
            category: this.props.category,
        };
        createBrowserHistory().push(route, routeState);
    }

    render() {
        return (
            <li onClick={this.handleTabClick}>{this.props.category.title}</li>
        );
    }
}

export default Tab;