import ImageItem from './ImageItem';
import '../assets/css/image.css';
import axios from 'axios';
import { useState } from 'react';
import { toast } from 'react-toastify';

const ImageItemGallery = ({images}) => {
    const [sessionImages, setSessionImages] = useState(images);

    const deleteImage = (id) => {
        axios.delete('http://localhost:8081/imagem/' + id)
        .then((response) => {
            toast.success("Imagem excluída com sucesso")
            setSessionImages(sessionImages.filter((i) => i.id != id));
        })
        .catch((err) => {
            console.log(err)
        })
    }

    return (
    <div className='images-item-gallery'>
        {sessionImages.map((i) => { 
            return <ImageItem id={i.id} src={"http://localhost:8081/imagens/" + i.nomeArquivo} handle={() => deleteImage(i.id)} />
        })}
    </div>
    )
}

export default ImageItemGallery;