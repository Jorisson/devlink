import { Social } from '../../components/Social'
import './home.css'
import {FaInstagram, FaGithub, FaLinkedin} from 'react-icons/fa'
import {useState, useEffect} from 'react'
import {db} from '../../services/fireBaseConection'
import{
  getDoc,
  doc,
  getDocs,
  collection,
  orderBy,
  query,
} from 'firebase/firestore'

export default function Home (){
  const [links, setLinks] = useState([])
  const [socialLinks, setSocialLinks] = useState({})

  useEffect(()=>{
    function loadLinks(){
      const linksRef = collection(db, "Links");
      const queryRef = query(linksRef, orderBy("created", "asc"))
      getDocs(queryRef)
      .then((snapshot) =>{
        let lista = [];
        snapshot.forEach((doc) =>{
          lista.push({
            id: doc.id,
            name: doc.data().name,
            url: doc.data().url,
            bg: doc.data().bg,
            color: doc.data().color
          })
        })
        setLinks(lista)
      })
    }
    loadLinks();
  }, [])

  useEffect(() =>{
    const docRef = doc(db, "Social", "link")
    getDoc(docRef)
    .then((snapshot)=>{
      if(snapshot.data() !== undefined){
        setSocialLinks({
          instagram: snapshot.data().instagram,
          github: snapshot.data().github,
          linkedin: snapshot.data().linkedin
        })
      }
    })
  }, [])
  return (
    <div className="home-container">
      <h1>Jorisson Yagami</h1>
      <span>Veja meus links 👇</span>

      <main className="links">
        { links.map((item)=> (
          <section className="link-area" style={{backgroundColor: item.bg}}>
            <a href={item.url} target="blank">
              <p className="link-text" style={{color: item.color}}>
                {item.name}
              </p>
            </a>
          </section>
        ))}
        {links.length !== 0 && Object.keys(socialLinks).length > 0 && (
          <footer>
            <Social url={socialLinks?.instagram}>
              <FaInstagram size={35} color="#fff" />
            </Social>
            <Social url={socialLinks?.github}>
              <FaGithub size={35} color="#fff" />
            </Social>
            <Social url={socialLinks?.linkedin}>
              <FaLinkedin size={35} color="#fff" />
            </Social>
          </footer>
        )}
      </main>
    </div>
  )
}