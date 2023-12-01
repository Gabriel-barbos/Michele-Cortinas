import { TextField, Stack, Link } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useEffect, useState } from 'react';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import StraightenOutlinedIcon from '@mui/icons-material/StraightenOutlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import AdicionarCarrinho from './AdicionarCarrinho';

function wc_hex_is_light(color) {
    const hex = color.replace('#', '');
    const c_r = parseInt(hex.substr(0, 2), 16);
    const c_g = parseInt(hex.substr(2, 2), 16);
    const c_b = parseInt(hex.substr(4, 2), 16);
    const brightness = ((c_r * 299) + (c_g * 587) + (c_b * 114)) / 1000;
    return brightness > 155;
}

const ProdutoEscolha = ({produto, closeHandle}) => {
    const [largura, setLargura] = useState(1);
    const [altura, setAltura] = useState(1);
    const [preco, setPreco] = useState(produto.preco)
    const [imagens, setImages] = useState(produto.imagens)

    const [variacoes, setVariacoes] = useState(produto.variacaos.map((v) => ({
        ...v, ativo: false
    })))

    useEffect(() => {
        setPreco(produto.preco * largura * altura)
    }, [largura, altura])

    const setCapa = (index) => {
        let updatedImagens = [imagens[index], ...imagens.filter((v, i) => {return i !== index})]
        console.log(updatedImagens)
        setImages(updatedImagens)
        // setImages(imagens.push(imagens[index]))
    }

    const selectColorHandle = (index) => {
        let newCoresArr = [...variacoes];
        for(let i in variacoes) {
            if(i == index){
                newCoresArr[i].ativo = !newCoresArr[i].ativo;
                continue;
            }
            newCoresArr[i].ativo = false
        }
        console.log(newCoresArr[index].ativo)
        setVariacoes(newCoresArr)
    }

    const handleBuy = () => {
        let variacaoAtiva = variacoes.find(v => v.ativo == true)
        if(variacaoAtiva){
            AdicionarCarrinho(produto.id, largura, altura, variacaoAtiva.id)
        } else {
            AdicionarCarrinho(produto.id, largura, altura)
        }
        closeHandle()
    }

    return (
        <div className="produto-escolha">
            <div className={`col produto-escolha-gallery ${imagens.length > 1 ? "multiple": ""}`}>
                <div className="produto-escolha-gallery-cover">
                    <img src={"http://localhost:8081/imagens/" + imagens[0].nomeArquivo} />
                </div>
                {produto.imagens.length > 1 && 
                    <div className="produto-escolha-gallery-images">
                        {imagens.map((v, i) => {
                            if(i !== 0) {
                                return <img src={"http://localhost:8081/imagens/" + v.nomeArquivo} onClick={() => {setCapa(i)}}/>
                            }
                        })}
                        
                    </div>
                }
            </div>
            <div className="col produto-escolha-info">
                <div className="produto-escolha-info-content">
                    <h2>{produto.nome}</h2>
                    <p className="produto-escolha-info-desc">{produto.descricao}</p>

                    <h3 className='produto-escolha-info-label'><StraightenOutlinedIcon /> Insira as medidas da sua janela</h3>
                    <Stack spacing={1}>
                        <TextField id="outlined-basic" onChange={(e) => {
                            if(e.target.value == "") return setLargura(1);
                            setLargura(Number(e.target.value.replace(",", ".")))}
                        } 
                    label="Largura (ex.: 1,80)" variant="outlined" sx={{width: "100%"}} />
                        <TextField id="outlined-basic" onChange={(e) => {
                            if(e.target.value == "") return setAltura(1);
                            setAltura(Number(e.target.value.replace(",", ".")))}
                        } label="Altura (ex.: 2,20)" variant="outlined" sx={{width: "100%"}} />

                        <Link underline="hover" target="_blank" href="https://www.youtube.com/watch?v=ANojN_BLoWA&pp=ygUiY29tbyBtZWRpciB1bWEgamFuZWxhIHBhcmEgY29ydGluYQ%3D%3D" fontSize="small">Não sabe medir? Veja esse vídeo</Link>
                    </Stack>

                    {variacoes.length > 0 && <h3 className='produto-escolha-info-label'><ColorLensOutlinedIcon /> Opcional: Escolha uma cor</h3>}    
                    <div className="produto-escolha-colors">
                        {variacoes.map((variacao, index) => {
                            return(
                                <div class={`produto-escolha-color ${variacao.ativo ? "ativo" : ""} ${wc_hex_is_light(variacao.cor) ? "dark" : ""}`} onClick={() => selectColorHandle(index)}>
                                    <span class="produto-escolha-color-hex" style={{backgroundColor: variacao.cor}} />
                                    <h5>{variacao.titulo}</h5>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="produto-escolha-buy" onClick={() => handleBuy()}>
                    <p style={{display: "flex", alignItems: "center", gap: "5px", color: "#aaa"}}>Inserir no carrinho <ArrowForwardIcon /></p>
                    <h2>{preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</h2>
                    <span className="produto-escolha-buy-warning"><InfoOutlinedIcon  /> Cálculo baseado na metragem oferecida de <br /> {largura}m x {altura}m</span>
                </div>
            </div>
        </div>
        )
}
export default ProdutoEscolha