import Header from '../../component/header/Header.component';
import heroImg from '../../assets/product-img/hero_img.jpg';
import heroImg3 from '../../assets/product-img/hero_img3.jpg';
import heroImg2 from '../../assets/product-img/group_chat.png';
import qrcode from '../../assets/bmc_qr.png';
import { Figure, Img } from '../../component/image/image.styled';
import {
  Section,
  HeroTextContatiner,
  ListItem,
  Ul,
  Br,
  Spx
} from './LandingPage.styled';
import {
  HeadingH2,
  HeadingH3,
  Para,
  Span,
} from '../../component/heading/headings.styled';
import { BtnContainer, Button } from '../../component/button/Button.component';
import { Link } from 'react-router-dom';
import Footer from '../../component/footer/footer.component';
import Socials from '../../component/socials/socials.component';

const LandingPage = () => {
  return (
    <>
      <Header route="/" />
      <main>
        <Section hero>
          <Figure hero>
            <Img
              src={heroImg}
              alt="Hero display of a chat application mockup"
            />
          </Figure>
          <HeroTextContatiner hero>
            <div>
              <HeadingH2 hero>
                Exprience the future with{' '}
                <Span hero>
                  Oi<Span exclamation>!</Span>
                </Span>
              </HeadingH2>
              <Para hero>
                A futuristic <span>Real-Time</span> built on modern technologies
                with features you want
              </Para>
              <div>
                <Link to="signin">
                  <Button primary hero>
                    Get Started
                  </Button>
                </Link>
                <Link to="signup">
                  <Button hero>Learn More</Button>
                </Link>
              </div>
            </div>
          </HeroTextContatiner>
        </Section>
        <Section id="about" about>
          <HeroTextContatiner hero about>
            <Para hero about>
              <Span hero>
                Oi<Span exclamation>!</Span>
              </Span>{' '}
              is a resolutional new instant messaging application, which gives
              you the platform to communicate with your friends and loved ones.
              It is a platform where you can share your thoughts, ideas and
              opinions freely. The app is built on the concept of bringing
              people together by breaking barriers between them. It gives you
              the freedom to express yourself without any fear or hesitation.
            </Para>
          </HeroTextContatiner>
          <Figure hero>
            <Img
              src={heroImg3}
              alt="Hero image of messaging app illustration"
            />
          </Figure>
        </Section>
        <Section id="feature" feature>
          <Figure hero>
            <Img src={heroImg2} alt="Billy Butcher Image" />
          </Figure>
          {/* <iframe src="https://www.buymeacoffee.com/pardonne" frameborder="0"></iframe> */}
          <HeroTextContatiner feature>
            <div>
              <HeadingH3 feature>
                With{' '}
                <Span hero>
                  Oi<Span exclamation>!</Span>
                </Span>
                you can{' '}
              </HeadingH3>
              <Ul>
                <ListItem>Freely express yourself</ListItem>
                <ListItem>Chat with your friends and family</ListItem>
                <ListItem>Use beaultify emorjis to express yourself</ListItem>
                <ListItem>
                  Create a group chat and invite your friends and family
                </ListItem>
              </Ul>
            </div>
          </HeroTextContatiner>
        </Section>
        <Section teamcon>
          <HeadingH2 team>Meet the Team</HeadingH2>
          <Section team>
            <Figure team>
    
            </Figure>
            <HeroTextContatiner team>
              <HeadingH3 team>Solomon Peter Ehigiamusoe, Eden Ayodeji David, Eunice Adediran.</HeadingH3>
              <HeadingH3 team>Software Engineer @ AlxAfrica</HeadingH3>
              <Para team>
              Meet Our Team of Junior Software Engineers"

Team Overview:
We are a team of [3] enthusiastic and resourceful individuals, each bringing their unique talents and perspectives to the table. We hope to keep adding more to our skills to further our experience in the software engineering field.
Collaborative Spirit: Collaboration is at the heart of their work. We were able to thrive in this project by sharing ideas, offering constructive feedback, and working together to overcome challenges.

Eager Learners: We are natural learners, constantly seeking opportunities for growth and improvement. Whether it's through self-study, training, or mentorship, we are always looking to expand our horizons.

Future Goals:
Looking ahead, Our team is committed to:
Continuously honing our skills and staying updated with the latest industry trends and technologies.
Taking on more significant responsibilities and contributing to larger projects in future.
Promoting a culture of innovation and excellence, inspiring our peers and fostering an environment conducive to growth.

Conclusion:
In conclusion, with the experience we gathered from THE ALX SOFTWARE ENGINNERING BOOT CAMP we hope to building more innovative projects thaty will impact positively to the growth of the economy.
              </Para>
              <Socials
                twitter={'https://twitter.com/Dafluxtech'}
                github={'https://github.com/Solomon454'}
                linkedin={
                  'https://www.linkedin.com/in/ehigiamusoe-peter-aba228252/'
                }
                portfolio={'https://Dafluxtech.netlify.app'}
              />
            </HeroTextContatiner>
          </Section>
        </Section>
        <Section id="contribute" contribute>
          <HeadingH3 contribute>Contributions</HeadingH3>
          <Para hero>
            You can contribute to the project in one or both of two (2) ways.
          </Para>
          <Section qrcode>
            <div>
              <Para hero>
                To help build the application and contribute to the codebase.{' '}
                <Br />
                Read the contribution <a href="">Documentations</a>
              </Para>
            </div>
            <Para qr>Or</Para>
            <div>
              <Para hero><Spx>Or you can</Spx> Scan the QRCode below to buy us a coffee</Para>
              <Figure contribute>
                <Img src={qrcode} alt="BuyMeCoffee QRCode" />
              </Figure>
            </div>
          </Section>
        </Section>
      </main>
      <Footer />
    </>
  );
};

export default LandingPage;
