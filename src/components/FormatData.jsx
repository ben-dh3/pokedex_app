import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';

const FormatData = (data) => {
    let image = ""

    let types = data.data.types?.map(getType);
    function getType(item){
        image = data.data.sprites.front_default
        return (
                <Card.Text>{[item.type.name]}</Card.Text>
        )
    }

    let abilities = data.data.abilities?.map(getAbility);
    function getAbility(item){
        return (
                <Card.Text>{[item.ability.name]}</Card.Text>
        )
    }

    // async function getAbilityDescription(item){
    //     abilityURL = item.ability.url
        
    //     const dataList = await fetch(abilityURL)
    //         .then(response => response.json())
    //         .catch((error) => console.log(error));

    //     if (dataList) {
    //         for (const entry in dataList) {
    //             if (entry === 'flavor_text_entries') { 
    //                 for (const flavor in dataList[`${entry}`]) {
    //                     if (dataList[`${entry}`][`${flavor}`]['language'].name === `en`) {
    //                         abilityDesc = dataList[`${entry}`][`${flavor}`].flavor_text;
    //                         break;
    //                     }
    //                 }
    //             }
    //         }
    //     } else {
    //     console.log('No data!');
    //     }

    let stats = data.data.stats?.map(getStats);
    function getStats(item){
        return (
            <Card.Text>{[item.stat.name]}: {[item.base_stat]}</Card.Text>
        )
    }


    return (
        <>
            <Card className="p-3 text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-3">
                <Stack gap={1} className="col-md-10 mx-auto">
                    <Card>
                        <Card.Img variant="top" src={image} />
                        <Card.Title>{data.data.name}</Card.Title>
                        <Card.Text>Height: {data.data.height}</Card.Text>
                        <Card.Text>Weight: {data.data.weight}</Card.Text>
                    </Card>
                    <Card>
                        <Card.Title>Type:</Card.Title> {types}
                    </Card>
                    <Card>
                        <Card.Title>Abilities:</Card.Title> {abilities}
                    </Card>
                    <Card>
                        <Card.Title>Stats:</Card.Title> {stats}
                    </Card>
                </Stack>
            </Card>
        </>
    )
}

export default FormatData