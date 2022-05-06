import react from "react"
export default class ItemList extends react.component {
    render() {
        console.log(this.props)
        return (
            <ItemList>
                <div>
                    <p>STEP OUT WE ARE SKZ {this.props.greeting}</p>
                </div>
            </ItemList>
        )
    }

}