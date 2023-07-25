import { useState } from 'react'
import contacts from '../contacts.json'
import ContactCard from './ContactCard'

const ContactsList = () => {

    const [actors, setActors] = useState(contacts.slice(0,5))

    let remaining = contacts.filter((contact) => !actors.includes(contact))

    const addRandom = () => {
        let rando = remaining[Math.floor(Math.random() * remaining.length)]
        setActors([rando, ...actors])
    }

    const sortPopularity = () => {
        let sorted = [...actors].sort((a,b) => b.popularity - a.popularity)
        setActors(sorted)
    }

    const sortName = () => {
        let sorted = [...actors].sort((a,b) => a.name.localeCompare(b.name))
        setActors(sorted)
    }

    const deleteActor = (id) => {
        let notRemoved = [...actors].filter((actor) => actor.id !== id)
        setActors(notRemoved)
    }



  return (
    <div>

        <button onClick={addRandom}>Add Random Contact</button>
        <button onClick={sortPopularity}>Sort by Popularity</button>
        <button onClick={sortName}>Sort by Name</button>

        <table>
            <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
                <th>Won Oscar</th>
                <th>Won Emmy</th>
                <th>Actions</th>
            </tr>
        {
            actors.map((actor) => {
                return <ContactCard key={actor.id} actor={actor} deleteActor={deleteActor} />
            })
        }
        </table>
    </div>
  )
}

export default ContactsList