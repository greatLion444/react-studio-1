// TODO: create a component that displays a single bakery item

export default function BakeryItem({name, image, price}) {
    return (
        <div>
            <img src={image}></img>
            <p>{name}</p>
            <p>{[price]}</p>
        </div>
    )
}