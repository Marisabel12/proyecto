import React from 'react'
import * as RiIcons from "react-icons/ri";

export const SidebarData=  [
     {
        title: 'home',
        path: '/',
     },
     {
         title: 'Estudiantes',
         path: '/Estudiantes',
         iconClosed: <RiIcons.RiArrowDownSFill />,
         iconClosed: <RiIcons.RiArrowUpSFill />, 
         subNav: [
             {
                title: 'Programar Materias',
                path: '/Estudiantes/Programar',
             },
             {
                title: 'Ver Horario',
                path: '/Estudiantes/VerHorario',
             }
         ]
     },
     {
        title: 'Docentes',
        path: '/Docentes',
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconClosed: <RiIcons.RiArrowUpSFill />, 
        subNav: [
            {
               title: 'Registro de Docentes',
               path: '/Docentes/RegistroDocente',
            },
            {
               title: 'Cargar Horarios',
               path: '/Docentes/CargarHorarios',
            },
            {
                title: 'Ambientes o salas de Zoom',
                path: '/Docentes/zoom',
             }
        ]
    },
    {
        title: 'Materias',
        path: '/Materias',
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconClosed: <RiIcons.RiArrowUpSFill />, 
        subNav: [
            {
               title: 'Registrar Materias',
               path: '/Materias/RegistrarMaterias',
            }
        ]
    },
]
export default SidebarData;