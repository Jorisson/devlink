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
  const [facebook, setFacebook] = useState("");
  const [instagram, setInstagram] = useState("");
  const [youtube, setYoutube] = useState("");

  useEffect(()=>{
    async function loadLinks(){
      const docRef = doc(db, "Social", "link")
      getDoc(docRef)
      .then((snapshot)=>{
        if(snapshot.data() !== undefined){
          setFacebook(snapshot.data().facebook)
          setInstagram(snapshot.data().instagram)
          setYoutube(snapshot.data().youtube)
        }
      })
    }

    loadLinks();
  },[])

  function handleSave(e){
    e.preventDefault();

    setDoc(doc(db, "Social", "link"), {
      facebook: facebook,
      instagram: instagram,
      youtube: youtube,
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
        <label className='label'>Link do facebook</label>
        <Input
          placeholder='Digite o link do facebook'
          value={facebook}
          onChange={(e) => setFacebook(e.target.value)}
         />
        <label className='label'>Link do Instagram</label>
        <Input
          placeholder='Digite o link do instagram'
          value={instagram}
          onChange={(e) => setInstagram(e.target.value)}
         />
        <label className='label'>Link do Youtube</label>
        <Input
          placeholder='Digite o link do youtube'
          value={youtube}
          onChange={(e) => setYoutube(e.target.value)}
         />
         <button type='submit' className='btn-register'>
          Salvar links <MdAddLink size={24} color='#fff' />
         </button>
      </form>
    </div>
  )
}