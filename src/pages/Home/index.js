import { Social } from '../../components/Social'
import './home.css'
import {FaInstagram, FaGithub, FaYoutube} from 'react-icons/fa'
import {useState, useEffect} from 'react'
import {db} from '../../services/fireBaseConection'
import{
  getDoc,
  collection,
  orderBy,
  query,
} from 'firebase/firestore'

export default function Home (){
  const [links, setLinks] = useState([])

  useEffect(()=>{
    function loadLinks(){
      const linksRef = collection(db, "Links");
      const queryRef = query(linksRef, orderBy("created", "asc"))
      const unsub = getDoc(queryRef, (snapshot) =>{
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

  return (
    <div className="home-container">
      <h1>Jorisson Yagami</h1>
      <span>Veja meus links 👇</span>

      <main className="links">
        <section className="link-area">
          <a href="#">
            <p className="link-text">GitHub</p>
          </a>
        </section>
        <section className="link-area">
          <a href="#">
            <p className="link-text">Linked-In</p>
          </a>
        </section>
        <section className="link-area">
          <a href="#">
            <p className="link-text">Instagram</p>
          </a>
        </section>
        <footer>
          <Social url="https://getemoji.com/">
            <FaInstagram size={35} color="#fff" />
          </Social>
          <Social url="https://getemoji.com/">
            <FaGithub size={35} color="#fff" />
          </Social>
          <Social url="https://getemoji.com/">
            <FaYoutube size={35} color="#fff" />
          </Social>
        </footer>
      </main>
    </div>
  )
}