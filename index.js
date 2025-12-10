


function create_mission(name, details, status) {

    let time = new Date()

    const mission = {

        id: nanoid(3),
        date: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, ''),
        name: name,
        details: details,
        status: status
    }
    return mission
}


