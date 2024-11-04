import styled from "styled-components"

const Div = styled.div`
padding: 6rem 4rem;
  display: grid;
 
  grid-template-columns: .25fr .25fr .25fr .25fr;
  grid-template-rows:auto 1fr;
  gap:10px;
  
`

const Div1 = styled.div`
  grid-area:1/1/2/4;
  padding-bottom: 5rem;
`
const Div4 = styled.div`
  grid-area:2/2/3/5;
`

const Image = styled.img`
height: 15rem;
`
function About() {
    return (
        <Div>
          <Div1>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet tellus tellus, vel mattis massa rhoncus at. Phasellus vulputate dapibus felis, vitae pharetra mi. Sed tempor enim ac nunc elementum porta. Etiam eget lorem ligula. Nulla arcu diam, fermentum rhoncus dignissim vitae, laoreet at turpis. Vivamus luctus, massa at pellentesque lobortis, turpis nunc laoreet felis, at congue sem justo at enim. Nunc laoreet id est at posuere. Nullam vitae varius lorem, et convallis nunc. Nam non dictum leo. Nullam aliquam ut mauris sit amet vehicula. Curabitur ac erat et orci aliquet tempor vel ac augue. Proin ullamcorper id leo sit amet consectetur. Duis est diam, suscipit eu euismod ut, scelerisque et felis.
            </p>
          </Div1>
          <div>
            <img src="logo-chat.png"/>
          </div>
          <div>
            <Image src="about.png"/>
          </div>
          <Div4><p>
            Pellentesque sed nulla blandit, aliquet quam eget, fringilla leo. Nulla sagittis, ex in maximus iaculis, velit erat ornare dui, in faucibus tellus eros vel ex. Suspendisse laoreet a augue et semper. Donec in tempus erat, sed volutpat ligula. Maecenas consequat nisi ac condimentum pulvinar. Quisque faucibus sed mauris nec hendrerit. Nam porta magna felis. Proin mollis risus tellus, et ultrices purus lacinia vitae. Morbi ac feugiat leo.</p></Div4>

        </Div>
    )
}

export default About
