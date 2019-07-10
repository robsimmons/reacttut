import * as React from "react";

interface Props {
    action: (x: number) => number;
}

interface State {
    input: string;
    output: number | null;
}

export default class ApplyFunction extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.change = this.change.bind(this);
        this.state = {
            input: "",
            output: null
        };
    }

    change(event: React.ChangeEvent<HTMLInputElement>) {
        const input = event.target.value;

        // Parse carefully, because Javascript
        const n = parseInt(input);
        const output = input === `${n}` ? this.props.action(n) : null;

        this.setState({ input, output });
    }

    render() {
        return (
            <div>
                <p>
                    x = <input onChange={this.change} value={this.state.input} />
                </p>
                <p>{this.state.output === null ? "Provide a number for x" : `f(x) = ${this.state.output}`}</p>
            </div>
        );
    }
}
