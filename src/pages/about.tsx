import type { NextPage } from 'next'
import { GetStaticProps } from 'next'
import { InferGetStaticPropsType } from 'next'

export const getStaticProps: GetStaticProps = async() => {
  return {
    props: {  usernames:['PerferctBalance1','AerakisMono','gusino','Parentalcontrol','panagiwwta_','iwannaaa98'] }
  }
}

const About: NextPage = ({usernames}: InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log(usernames)
  return (
    <div>
      About
    </div> 
  )
}

export default About