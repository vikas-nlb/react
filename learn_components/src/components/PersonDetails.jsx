function PersonDetails({name, age, place, container}) {
    const Container = container
    return(
        <Container>
            <span>Name : {name} </span>
            <span>Age : {age} </span>
            <span>Place : {place} </span>
        </Container>
    )
}

export default PersonDetails;