import './Fstcomp.css'

export default function Fstcomp(){
    return(
        <img 
            src='https://media.licdn.com/dms/image/D4D03AQF2DeyAafctkw/profile-displayphoto-shrink_400_400/0/1688924729379?e=1712793600&v=beta&t=RtZ1k6LCEF2oQ9DDBR99ArVrZ4sXcmDjV8NdEPKHUb0'
            alt='Paras Jaitly'
        />
    )
}

function Profile()
{
    return(
        <img 
            src='https://media.licdn.com/dms/image/D4D03AQF2DeyAafctkw/profile-displayphoto-shrink_400_400/0/1688924729379?e=1712793600&v=beta&t=RtZ1k6LCEF2oQ9DDBR99ArVrZ4sXcmDjV8NdEPKHUb0'
            alt='Paras Jaitly'
        />
    )
}

export function Gallery(){
    return(
        <section>
            <h1>Paras Jaitly</h1>

            <Profile />
            <Profile />
            <Profile />
        </section>
    )
}