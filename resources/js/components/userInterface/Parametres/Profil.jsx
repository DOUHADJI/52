import { Grid, Text, Button, Input } from '@nextui-org/react'
import { useContext } from 'react'
import { BsPerson } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { UserContext } from '../../userContext'


const Profil = () => {

  const {user, setUser} = useContext(UserContext)

  return (
    <div className="w-full">
      <div className="flex  items-center justify-center ">
        <Text b className="text-gray-500 text-center">
          Informations sur le joueur
        </Text>
      </div>

      <div className="mt-6 w-full rounded-[20px] px-4 py-10 bg-gray-300 ">
        <div>
          <Grid.Container gap={2}>
            <Grid sm={4} className="w-full">
              <div className='flex w-full border-4 border-black rounded-[20px] items-center justify-center'>
                <BsPerson className='text-5xl text-center'/>
              </div>
            </Grid>

            <Grid sm={8} className="w-full">
              <div className="grid gap-3 w-full ">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="grid">
                    <Text
                      b
                      className="text-sm ml-4 mb-2 text-gray-500  dark:text-white"
                    >
                      {' '}
                      Nom
                    </Text>
                    <Input
                      readOnly
                      value={user?.nom}
                      aria-label={'Nom'}
                      color={'primary'}
                    />
                  </div>

                  <div className="grid">
                    <Text
                      b
                      className="text-sm ml-4 mb-2 text-gray-500  dark:text-white"
                    >
                      {' '}
                      Prénoms
                    </Text>
                    <Input
                      readOnly
                      value={user?.prenoms}
                      aria-label={'prénoms'}
                      color={'primary'}
                    />
                  </div>
                 
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="grid">
                    <Text
                      b
                      className="text-sm ml-4 mb-2 text-gray-500  dark:text-white"
                    >
                      Pseudo
                    </Text>
                    <Input
                      readOnly
                      value={user?.pseudo}
                      aria-label={'Pseudo'}
                      color={'primary'}
                    />
                  </div>

                  <div className="grid">
                    <Text
                      b
                      className="text-sm ml-4 mb-2 text-gray-500  dark:text-white"
                    >
                      {' '}
                      Email
                    </Text>
                    <Input
                      readOnly
                      value={user ? user.email : 'johndoe@email.com'}
                      aria-label={'Email'}
                    />
                  </div>
                </div>
                
              </div>
            </Grid>


          </Grid.Container>
        </div>

        <div className="flex justify-end items-center mt-4 w-full gap-4">
        <Link to={"/backoffice/mon_compte/changer_mon_mot_de_passe"}>
            <Button
              auto
              type={null}
              css={{ background:"#BF7B2A" }}
              onClick={() => showUpdateForm(true)}
            >
              <p className="font-bold">
                Changer mon mot de passe
              </p>
            </Button>
          </Link>

          <Link to={"/backoffice/mon_compte/mettre_mes_informations_a_jour"}>
            <Button
                auto
                type={null}
            >
                <p className="font-bold">
                  Modifier mes informations générales
                </p>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Profil
