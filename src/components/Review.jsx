import React from 'react'

const Review = () => {

   const clients = [
    { name: 'William Barnes', company: 'Karman Ventures', url:'#' },
    { name: 'Becky Chastain', company: 'Medallia', url:'#' },
    { name: 'Nina Walloch', company: 'Planetly', url:'#' },
    { name: 'Tomer Levy', company: 'Workiz Easy', url:'#' },
    { name: 'Ellen Kim', company: 'Premium Blend', url:'#' }
  ]
  return (
    <div className='mx-15'>
        <h2 className='font-neuemontreal text-5xl mt-20 '>Clients' Review</h2>
        <hr  className='mt-20 border-t border-zinc-500' />
        <table className='w-full'>
            <tbody>
                {clients.map((client, index) => (
                    <tr className='flex justify-between items-center border-b p-5 border-zinc-200' key={index}>
                        <td><a href={client.url}>{client.company}</a></td>
                        <td>{client.name}</td>
                        <td>read</td>
                    </tr>
                ))}
            </tbody>
        </table>

    </div>
  )
}

export default Review