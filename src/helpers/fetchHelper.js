export async function getUserDetails() {
    try {
        const response = await fetch('http://localhost:3000/api/v1/getUser');
        console.log(response);
        const responseJson = await response.json();
        console.log(responseJson);
        return await responseJson;
    } catch (error) {
        console.error(error);
    }
}

/*
dispatching data*****************************************************************
 */
export async function dispatchData(data) {
    try {
            if(!data) {
            {return await "An object is empty!"}
        }
        const response =  await fetch('http://localhost:3000/api/v1/createInitData',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8',
                },
                body: JSON.stringify(data),
            }
        );
        return await response;
    } catch (error) {
        console.log(error);
    }
}

export async function getInitData() {

    try {
        const response = await fetch(`/api/v1/getInitData`);
        const responseJson = await response.json();
        return await responseJson;
    } catch (error) {
        console.error(error);
    }
}

/*
EVENTS ***********************************************************************************
 */
export async function getEvents(id) {

    try {
        if(!id) {
            const response = await fetch('http://localhost:3000/api/v1/events/getEvents');
            const responseJson = await response.json();
            return await responseJson;
        }
        const response = await fetch(`http://localhost:3000/api/v1/events/getEvents/${id}`);
        const responseJson = await response.json();
        return await responseJson;
    } catch (error) {
        console.error(error);
    }
}

export async function createEvent(newEvent) {
    console.log("fetch", JSON.stringify(newEvent));
    if(!newEvent) {return await "An object is empty!"}
    try {
        const response =  await fetch('http://localhost:3000/api/v1/events/createEvent',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                },
                json: JSON.stringify(newEvent),
            }
            );
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}

export async function updateEvent(event) {
    if(!event) {return 'No event'}
    try {
        const response = await fetch(`http://localhost:3000/api/v1/events/updateEvent/${event.id}`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                },
                body: JSON.stringify(event)
            }
        );
        const responseJson = await response.json();
        return await responseJson;
    } catch (error) {
        console.error(error);
    }
}

export async function deleteEvent(id) {
    if(!id) {return 'No event id!'}
    try {
        const response = await fetch(`http://localhost:3000/api/v1/events/deleteEvent/${id}`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                }
            }
        );
        const responseJson = await response.json();
        return await responseJson;
    } catch (error) {
        console.error(error);
    }
}

/*
SPEAKERS ***********************************************************************************
 */
export async function getSpeakers(id) {
    try {
        if(!id) {
            const response = await fetch(`http://localhost:3000/api/v1/speakers/getSpeakers`);
            const responseJson = await response.json();
            return await responseJson;
        }
        const response = await fetch(`http://localhost:3000/api/v1/speakers/getSpeakers/${id}`);
        const responseJson = await response.json();
        return await responseJson;
    } catch (error) {
        console.error(error);
    }
}

export async function createSpeaker(newSpeaker) {
    console.log("fetch", JSON.stringify(newSpeaker));
    if(!newSpeaker) {return await "An object is empty!"}
    try {
        const response =  await fetch('http://localhost:3000/api/v1/speakers/createSpeaker',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                },
                body: JSON.stringify(newSpeaker),
            }
        );
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}

export async function updateSpeaker(speaker) {
    if(!speaker) {return 'No Speaker'}
    try {
        const response = await fetch(`http://localhost:3000/api/v1/speakers/updateSpeaker/${speaker.id}`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                },
                body: JSON.stringify(speaker)
            }
        );
        const responseJson = await response.json();
        return await responseJson;
    } catch (error) {
        console.error(error);
    }
}

export async function deleteSpeaker(id) {
    if(!id) {return 'No Speaker id!'}
    try {
        const response = await fetch(`http://localhost:3000/api/v1/speakers/deleteSpeaker/${id}`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                }
            }
        );
        const responseJson = await response.json();
        return await responseJson;
    } catch (error) {
        console.error(error);
    }
}

/*
Groups ***********************************************************************************
 */
export async function getGroups(id) {
    try {
        if(!id) {
            const response = await fetch(`http://localhost:3000/api/v1/groups/getGroups`);
            const responseJson = await response.json();
            return await responseJson;
        }
        const response = await fetch(`http://localhost:3000/api/v1/groups/getGroups/${id}`);
        const responseJson = await response.json();
        return await responseJson;
    } catch (error) {
        console.error(error);
    }
}

export async function createGroup(newGroup) {
    console.log("fetch", JSON.stringify(newGroup));
    if(!newGroup) {return await "An object is empty!"}
    try {
        const response =  await fetch('http://localhost:3000/api/v1/groups/createGroup',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                },
                body: JSON.stringify(newGroup),
            }
        );
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}

export async function updateGroup(group) {
    if(!group) {return 'No Speaker'}
    try {
        const response = await fetch(`http://localhost:3000/api/v1/groups/updateGroup/${group.id}`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                },
                body: JSON.stringify(group)
            }
        );
        const responseJson = await response.json();
        return await responseJson;
    } catch (error) {
        console.error(error);
    }
}

export async function deleteGroup(id) {
    if(!id) {return 'No Speaker id!'}
    try {
        const response = await fetch(`http://localhost:3000/api/v1/groups/deleteGroup/${id}`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                }
            }
        );
        const responseJson = await response.json();
        return await responseJson;
    } catch (error) {
        console.error(error);
    }
}

/*
COMPANIES ***********************************************************************************
 */
export async function getCompanies(id) {
    try {
        if(!id) {
            const response = await fetch(`http://localhost:3000/api/v1/companies/getCompanies`);
            const responseJson = await response.json();
            return await responseJson;
    }
        const response = await fetch(`http://localhost:3000/api/v1/companies/getCompanies/${id}`);
        const responseJson = await response.json();
        return await responseJson;
    } catch (error) {
        console.error(error);
    }
}

export async function createCompany(newCompany) {
    console.log("fetch", JSON.stringify(newCompany));
    if(!newCompany) {return await "An object is empty!"}
    try {
        const response =  await fetch('http://localhost:3000/api/v1/groups/createGroup',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                },
                body: JSON.stringify(newCompany),
            }
        );
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}

export async function updateCompany(company) {
    if(!company) {return 'No Speaker'}
    try {
        const response = await fetch(`http://localhost:3000/api/v1/groups/updateGroup/${company.id}`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                },
                body: JSON.stringify(company)
            }
        );
        const responseJson = await response.json();
        return await responseJson;
    } catch (error) {
        console.error(error);
    }
}

export async function deleteCompany(id) {
    if(!id) {return 'No Speaker id!'}
    try {
        const response = await fetch(`http://localhost:3000/api/v1/groups/deleteGroup/${id}`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                }
            }
        );
        const responseJson = await response.json();
        return await responseJson;
    } catch (error) {
        console.error(error);
    }
}

/*
ROOMS ***********************************************************************************
 */
export async function getRooms(id) {
    try {
        if(!id) {
            const response = await fetch(`http://localhost:3000/api/v1/rooms/getRooms`);
            const responseJson = await response.json();
            return await responseJson;
        }
        const response = await fetch(`http://localhost:3000/api/v1/rooms/getRooms/${id}`);
        const responseJson = await response.json();
        return await responseJson;
    } catch (error) {
        console.error(error);
    }
}

export async function createRoom(newRoom) {
    console.log("fetch", JSON.stringify(newRoom));
    if(!newRoom) {return await "An object is empty!"}
    try {
        const response =  await fetch('http://localhost:3000/api/v1/rooms/createRoom',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                },
                body: JSON.stringify(newRoom),
            }
        );
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}

export async function updateRoom(room) {
    if(!room) {return 'No Speaker'}
    try {
        const response = await fetch(`http://localhost:3000/api/v1/rooms/updateRoom/${room.id}`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                },
                body: JSON.stringify(room)
            }
        );
        const responseJson = await response.json();
        return await responseJson;
    } catch (error) {
        console.error(error);
    }
}

export async function deleteRoom(id) {
    if(!id) {return 'No Speaker id!'}
    try {
        const response = await fetch(`http://localhost:3000/api/v1/rooms/deleteRoom/${id}`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                }
            }
        );
        const responseJson = await response.json();
        return await responseJson;
    } catch (error) {
        console.error(error);
    }
}
