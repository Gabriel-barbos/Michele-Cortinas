import '../../assets/css/perguntas.css'

export function Perguntas(){
    return(
        <>
    <div className="perguntas">
      <h1 className="perguntas-frequentes">
        <p className="perguntas-frequentes1">Perguntas Frequentes</p>
      </h1>

      <div className="pergunta1">
        
        <h2 className="question1">Qual o prazo de entrega do produto?</h2>
        <h4 className="resposta1">
          O prazo é de 15 dias uteis após aprovação do pedido, porém esse prazo
          pode ser alterados de acordo com a região do destinatário
        </h4>
      </div>

      <div className="pergunta2">
        <h2 className="question2">O tecido blackout bloqueia toda a luz ?</h2>
        <h4 className="resposta1">
          Nossas cortinas bloqueiam até 95% da luz do sol sem danificar o tecido
        </h4>
      </div>

      <div className="pergunta3">
        <h2 className="pergunta31">Quanto tempo dura a garantia ?</h2>
        <h4 className="resposta3">
          Nossas cortinas tradicionais possuem uma garantia de 1 ano, e as
          persianas possuem garantia total de 24 meses
        </h4>
      </div>
    </div>
        
        </>
    )
}