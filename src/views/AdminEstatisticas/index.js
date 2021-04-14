import React, { useEffect, useState } from 'react'
import { Container, BoxContent, SideMenu, ContentPage, BoxEstatistica,
    ContainerEstatisticas, ContainerGraficosCadastros, ContainerGraficosVendas,
    Graficos
} from '../../styles/AdminEstatisticas'
import api from '../../services/api'
import { getToken } from '../../services/auth'
import HeaderComponent from '../../components/Header'
import estatisticas from '../../utils/img/estatisticas.png'
import produtos from '../../utils/img/produtos.png'
import posts from '../../utils/img/posts.png'
import usuarios from '../../utils/img/usuarios.png'
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom"

const AdminConsultaProduto = () => {

    const [error, setError] = useState()
    const [isProdutos, setProdutos] = useState(false)
    const [estatisticasProdutos, setEstatisticaProdutos] = useState(false)
    const [estatisticasUsuarios, setEstatisticaUsuarios] = useState(false)
    const [produtosTable, setProdutosTable] = useState([])
    const [isEdit, setEdit] = useState(false)
    const history = useHistory();




    async function consultaDadosProdutos() {
        const token = getToken();
        const header_config = { 'x-access-token': `${token}` };

        console.log(header_config);

        await api.get(`/produtos`, { headers: header_config }).then(res => {
            setEstatisticaProdutos(res.data.length)
            console.log("data: ", res.data);
        });


    }

    async function consultaDadosUsuarios() {
        const token = getToken();
        const header_config = { 'x-access-token': `${token}` };

        console.log(header_config);


        await api.get(`/usuario`, { headers: header_config }).then(res2 => {
            setEstatisticaUsuarios(res2.data.length)
            console.log("data: ", res2.data);
        });


    }

    useEffect(() => {
        consultaDadosProdutos();
        consultaDadosUsuarios();
    }, [])

    return (
        <Container>
            <HeaderComponent />
            <BoxContent>
                <SideMenu>
                    <ul>
                        <li><span><img src={estatisticas} /></span><h1><Link to="#">Estatísticas gerais</Link></h1></li>
                        {isProdutos ?
                            <>
                                <li onClick={() => setProdutos(false)}><span><img src={produtos}></img></span><h1>Produtos</h1></li>
                                <li><h2><Link to="/admin_produtos_insere">- Novo</Link></h2></li>
                                <li><h2><Link to="/admin_produtos_consulta">- Todos os Produtos</Link></h2></li>
                            </>
                            : <li onClick={() => setProdutos(true)}><span><img src={produtos}></img></span><h1>Produtos</h1></li>}
                        <li><span><img src={posts}></img></span><h1>Posts</h1></li>
                        <li><span><img src={usuarios}></img></span><Link to="/admin_usuarios"><h1>Usuários</h1></Link></li>
                    </ul>
                </SideMenu>
                <ContentPage>
                    <ContainerEstatisticas>
                        <BoxEstatistica>
                            <h1>Total Produtos</h1>
                            <h2>{estatisticasProdutos}</h2>
                        </BoxEstatistica>
                        <BoxEstatistica>
                            <h1>Total Usuário</h1>
                            <h2>{estatisticasUsuarios}</h2>
                        </BoxEstatistica>
                        <BoxEstatistica>
                            <h1>Total Vendas</h1>
                            <h2>{estatisticasUsuarios}</h2>
                        </BoxEstatistica>
                    </ContainerEstatisticas>
                    <Graficos>
                        <ContainerGraficosCadastros>

                        </ContainerGraficosCadastros>
                        <ContainerGraficosVendas>

                        </ContainerGraficosVendas>
                    </Graficos>
                </ContentPage>
            </BoxContent>

        </Container>
    )
};
export default AdminConsultaProduto;