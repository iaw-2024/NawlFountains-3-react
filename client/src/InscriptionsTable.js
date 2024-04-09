function InscriptionsTable({entries}) {
    return (
      <ul id="listado_inscripciones" class="text-center bg-gray-300 sm:rounded-lg sm:p-2 sm:m-2 space-y-5">
         <li class="grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 space-y-2 sm:space-y-0 sm:p-3 bg-blue-500 sm:rounded-lg"><p>Nombre</p> <p>DNI</p> <p>LU</p> <p>Email</p> <p>Fecha</p></li>
         {entries.map((entry, index) => (
             <li className="grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 space-y-2 sm:space-y-0 sm:p-3 bg-gray-100 sm:rounded-lg" key={index}>
                 <p>{entry.name}</p>
                 <p>{entry.dni}</p>
                 <p>{entry.lu}</p>
                 <p>{entry.email}</p>
                 <p>{entry.date}</p>
             </li>
         ))}
     </ul>
  )
}
export default InscriptionsTable;