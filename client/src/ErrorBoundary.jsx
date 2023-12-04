import { Component } from "react";

export default class ErrorBoundary extends Component {
    constructor() {
        super()
        this.state = {
            hasError: false,
            error: null,
            errorInfo: null,
        }
    };

    static getDerivedStateFromError(error) {
        console.log(error);

        return { hasError: true, error };
    };

    componentDidCatch(error, errorInfo) {
        this.setState({
            hasError: true,
            error,
            errorInfo,
        });

        if (this.props.onError) {
            this.props.onError(error);
        }
    };

    componentDidMount() {
        window.addEventListener('unhandledrejection', this.handlePromiseError);
    };

    conponentWillUnmount() {
        window.removeEventListener('unhandledrejection', this.handlePromiseError);
    }

    handlePromiseError = (e) => {
        const error = e.reason;

        this.setState({hasError: true, error});

        if (this.props.onError) {
            this.props.onError(error);
        }
    };

    render() {
        return this.props.children;
    }
};