import './networks.css'
import {Header} from '../../components/Header'
import {Input} from '../../components/Input'
import {MdAddLink} from 'react-icons/md'
import {useState, useEffect} from 'react'
import {db} from '../../services/fireBaseConection'
import{
  setDoc,
  doc,
  getDoc
} from 'firebase/firestore'
import { toast } from 'react-toastify'

export default function Networks(){
  const [instagram, setInstagram] = useState("");
  const [github, setGithub] = useState("");
  const [linkedin, setLinkedin] = useState("");

  useEffect(()=>{
    async function loadLinks(){
      const docRef = doc(db, "Social", "link")
      getDoc(docRef)
      .then((snapshot)=>{
        if(snapshot.data() !== undefined){
          setInstagram(snapshot.data().instagram)
          setGithub(snapshot.data().github)
          setLinkedin(snapshot.data().linkedin)
        }
      })
    }

    loadLinks();
  },[])

  function handleSave(e){
    e.preventDefault();

    setDoc(doc(db, "Social", "link"), {
      instagram: instagram,
      github: github,
      linkedin: linkedin,
      dateModify: new Date(),
    })
    .then(()=>{
      toast.success("Redes Sociais Registrados com Sucesso!");
    })
    .catch((error) =>{
      toast.error("Erro ao registrar as redes sociais: "+ error + "!");
    })
  }

  return(
    <div className='admin-container'>
      <Header />
      <h1 className='title-social'>Suas redes sociais</h1>
      <form className='form' onSubmit={handleSave}>
        <label className='label'>Link do Instagram</label>
        <Input
          placeholder='Digite o link do instagram'
          value={instagram}
          onChange={(e) => setInstagram(e.target.value)}
         />
        <label className='label'>Link do github</label>
        <Input
          placeholder='Digite o link do Github'
          value={github}
          onChange={(e) => setGithub(e.target.value)}
         />
        <label className='label'>Link do linkedin</label>
        <Input
          placeholder='Digite o link do linkedin'
          value={linkedin}
          onChange={(e) => setLinkedin(e.target.value)}
         />
         <button type='submit' className='btn-register'>
          Salvar links <MdAddLink size={24} color='#fff' />
         </button>
      </form>
    </div>
  )
}