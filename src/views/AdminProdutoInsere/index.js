import React, { useEffect, useState } from 'react'
import { Container, BoxContent, SideMenu, ContentPage } from '../../styles/AdminProduto'
import api from '../../services/api'
import { getToken } from '../../services/auth'
import HeaderComponent from '../../components/Header'
import estatisticas from '../../utils/img/estatisticas.png'
import produtos from '../../utils/img/produtos.png'
import sucesso from '../../utils/img/sucesso.png'
import posts from '../../utils/img/posts.png'
import usuarios from '../../utils/img/usuarios.png'
import Swal from 'sweetalert2'
import { Link } from "react-router-dom"
import Dropzone from 'react-dropzone'
import Upload from '../../components/Upload'
import FileList from '../../components/FileList'
import { uniqueId } from 'lodash'
import filesize from 'filesize'
import { UploadComponent } from '../../components/ComponentUpload'

const AdminNewProduto = (props) => {


    const [editObject, setEditObject] = useState([]);

    const [nome, setNome] = useState("");
    const [descricao_close, setpDescricao] = useState("");
    const [descricao_open, setsDescricao] = useState("");
    const [texto, setTexto] = useState("");
    const [preco, setPreco] = useState();
    const [imagens, setImagens] = useState();
    const [error, setError] = useState();
    const [isProdutos, setProdutos] = useState(false);
    const [botao, setBotao] = useState(false);
    const [produtoId, setProdutoId] = useState()
    const [isEdit, setEdit] = useState(false)
    const [dataToChange, setDataToChange] = useState()
    const [PreviewId, setPreviewId] = useState()
    const [PreviewNome, setPreviewNome] = useState()
    const [PreviewpDescricao, setPreviewpDescricao] = useState()
    const [PreviewSDescricao, setPreviewsDescricao] = useState()
    const [PreviewTexto, setPreviewTexto] = useState()
    const [PreviewPreco, setPreviewPreco] = useState()




    var teste = 0;

    //Pseudo validação de tamanho mínimo de campos
    // if (nome && nome.length > 10) {

    //     console.log("pronto")
    //     teste = teste + 1;
    //     document.querySelector("#validacaoNome").hidden = false;
    // } else if (nome && nome.length < 10) {
    //     document.querySelector("#validacaoNome").hidden = true;
    //     teste = teste - 1;
    // } else if (!nome) {
    //     teste = teste - 1;

    // }

    // if (descricao_close && descricao_close.length > 20) {
    //     console.log("pronto")
    //     teste = teste + 1;
    //     document.querySelector("#validacaoPDescricao").hidden = false;
    // } else if (descricao_close && descricao_close.length < 20) {
    //     teste = teste - 1;
    //     document.querySelector("#validacaoPDescricao").hidden = true;
    // } else if (!descricao_close) {
    //     teste = teste - 1;

    // }

    // if (descricao_open && descricao_open.length > 20) {
    //     console.log("pronto")
    //     teste = teste + 1;
    //     document.querySelector("#validacaoSDescricao").hidden = false;
    // } else if (descricao_open && descricao_open.length < 20) {
    //     teste = teste - 1;
    //     document.querySelector("#validacaoSDescricao").hidden = true;
    // } else if (descricao_open === null) {
    //     teste = teste - 1;
    //     document.querySelector("#validacaoSDescricao").hidden = true;
    // }

    // if (texto && texto.length > 100) {
    //     console.log("pronto")
    //     teste = teste + 1;
    //     document.querySelector("#validacaoTexto").hidden = false;
    // } else if (texto && texto.length < 100) {
    //     teste = teste - 1;
    //     document.querySelector("#validacaoTexto").hidden = true;
    // } else if (texto === null) {
    //     document.querySelector("#validacaoTexto").hidden = true;
    //     teste = teste - 1;
    // }

    // if (preco && preco.length > 2) {
    //     console.log("pronto")
    //     teste = teste + 1;
    //     document.querySelector("#validacaoPreco").hidden = false;
    // } else if (preco && preco.length < 3) {
    //     teste = teste - 1;
    //     document.querySelector("#validacaoPreco").hidden = true;
    // } else if (preco === null) {
    //     teste = teste - 1;
    //     document.querySelector("#validacaoPreco").hidden = true;
    // }

    // if (imagens && imagens.length > 2) {
    //     console.log("pronto")
    //     teste = teste + 1;
    //     document.querySelector("#validacaoImagem").hidden = false;
    // } else if (imagens && imagens.length < 3) {
    //     teste = teste - 1;
    //     document.querySelector("#validacaoImagem").hidden = true;
    // } else if (imagens === null) {
    //     teste = teste - 1;
    //     document.querySelector("#validacaoImagem").hidden = true;
    // }
    // if (teste === 6) {
    //     document.querySelector("#buttonSubmit").disabled = false;
    // } else if (teste > 0 && teste < 6) {
    //     document.querySelector("#buttonSubmit").disabled = true;

    // }

    const fetchPessoayId = () => {

        // Pega o ID do elemento em questão, passado pela URL
        const pessoaId = props.match.params.id;

        setProdutoId(pessoaId)
        // console.log('id recebido: ', movieId);

        return pessoaId;

    };

    // Função que busca o dado relacionado ao Id mandado pela index e seta os Inputs, utilizado na hora de edição


    async function consultaDados() {
        const token = getToken();
        const header_config = { 'x-access-token': `${token}` };

        console.log(header_config);

        var idRequest = fetchPessoayId();
        if (idRequest) {
            setEdit(true);

            await api.get(`/produtos/${idRequest}`, { headers: header_config }).then(res => {
                setDataToChange(res.data);
                setPreviewId(res.data.id);
                setPreviewNome(res.data.nome);
                setPreviewpDescricao(res.data.descricao_open);
                setPreviewsDescricao(res.data.descricao_close);
                setPreviewTexto(res.data.texto);
                setPreviewPreco(res.data.preco);
                console.log("data: ", res.data);
            });
        }
    }

    // console.log(dataToChange);

    const editarProduto = () => {

        if (!nome) {
            setNome(dataToChange.nome);
            console.log("n tem nome")
        }
        if (!descricao_close) {
            setpDescricao(dataToChange.descricao_close)
            console.log("n tem p descricao")
        }
        if (!descricao_open) {
            setsDescricao(dataToChange.descricao_open)
            console.log("n tem s descricao")
        }
        if (!texto) {
            setTexto(dataToChange.texto)
            console.log("n tem texto")
        }
        if (!preco) {
            setTexto(dataToChange.preco)
            console.log("n tem preco")
        }

        console.log("nome: ", nome);
        console.log("descricao_close: ", descricao_close);
        console.log("descricao_open: ", descricao_open);
        console.log("texto: ", texto);
        console.log("preco: ", preco);
        console.log("imagens: ", imagens);
        try {
            const token = getToken();
            var id = fetchPessoayId();
            const header_config = { 'x-access-token': `${token}` };
            console.log(header_config);
            api.put(`/produtos/${id}`, { nome, descricao_close, descricao_open, texto, preco }, { headers: header_config });
            Swal.fire({
                title: "Editado com Sucesso!",
                text: "Os dados foram salvos",
                icon: "success",
            });
        } catch (err) {
            Swal.fire({
                title: "Erro ao editar!",
                text: "Por favor verifique todos os campos",
                icon: "error",
            });
            setError(
                "Houve um problema com a edição, verifique os campos. T.T"
            );
        }
    };

    const enviarProduto = () => {

        console.log("enviando")

        if (!nome || !descricao_close || !descricao_open || !texto || !preco) {
            setError("Preencha o form por completo para cadastrar um produto!");
            Swal.fire({
                title: "Erro ao cadastrar!",
                text: "Por favor verifique todos os campos",
                icon: "error",
            });
        } else {
            console.log("nome: ", nome);
            console.log("descricao_close: ", descricao_close);
            console.log("nodescricao_openme: ", descricao_open);
            console.log("texto: ", texto);
            console.log("preco: ", preco);
            console.log("imagens: ", imagens);
            try {
                const token = getToken();
                const header_config = { 'x-access-token': `${token}` };
                console.log(header_config);
                api.post("/produtos", { nome, descricao_close, descricao_open, texto, preco, imagens }, { headers: header_config });
                Swal.fire({
                    title: "Cadastrado com Sucesso!",
                    text: "Os dados foram salvos",
                    icon: "success",
                });
            } catch (err) {
                Swal.fire({
                    title: "Erro ao cadastrar!",
                    text: "Por favor verifique todos os campos",
                    icon: "error",
                });
                setError(
                    "Houve um problema com o cadastro, verifique os campos. T.T"
                );
            }
        }
    };

    // const state = {
    //     uploadedFiles: [],
    // };

    // const handleUpload = files => {
    //     const uploadedFiles = files.map(file => ({
    //         file,
    //         id: uniqueId(),
    //         name: file.name,
    //         readableSize: filesize(file.size),
    //         preview: URL.createObjectURL(file),
    //         progress: 0,
    //         uploaded: false,
    //         error: false,
    //         url:  null,
    //     }))

    //     this.setState({
    //         uploadedFiles: this.state.uploadedFiles.concat(uploadedFiles)
    //     });


    //     console.log(files)
    // }


    useEffect(() => {
        consultaDados();
    }, [])

    return (
        <Container>
            <HeaderComponent />
            <BoxContent>
                <SideMenu>
                    <ul>
                        <li><span><img src={estatisticas} /></span><h1><Link to="/admin_estatisticas">Estatísticas gerais</Link></h1></li>
                        {isProdutos ?
                            <>
                                <li onClick={() => setProdutos(false)}><span><img src={produtos}></img></span><h1>Produtos</h1></li>
                                <li><h2><Link to="#">- Novo</Link></h2></li>
                                <li><h2><Link to="/admin_produtos_consulta">- Todos os Produtos</Link></h2></li>
                            </>
                            : <li onClick={() => setProdutos(true)}><span><img src={produtos}></img></span><h1>Produtos</h1></li>}
                        <li><span><img src={posts}></img></span><h1>Posts</h1></li>
                        <li><span><img src={usuarios}></img></span><Link to="/admin_usuarios"><h1>Usuários</h1></Link></li>
                    </ul>
                </SideMenu>
                <ContentPage>
                    <h2>{error}</h2>
                    <div className="inputArea">
                        <input
                            className="input"
                            placeholder="nome"
                            onChange={e => setNome(e.target.value)}
                            defaultValue={PreviewNome}
                        />
                        <img id="validacaoNome" hidden={true} src={sucesso}></img>
                    </div>

                    <div className="inputArea">
                        <input
                            className="input"
                            placeholder="primeira descrição"
                            onChange={e => setpDescricao(e.target.value)}
                            defaultValue={PreviewpDescricao}
                        />
                        <img id="validacaoPDescricao" hidden={true} src={sucesso}></img>
                    </div>

                    <div className="inputArea">
                        <input
                            className="input"
                            placeholder="segunda descrição"
                            onChange={e => setsDescricao(e.target.value)}
                            defaultValue={PreviewSDescricao}
                        />
                        <img id="validacaoSDescricao" hidden={true} src={sucesso}></img>
                    </div>

                    <div className="inputArea">
                        <textarea
                            placeholder="texto"
                            onChange={e => setTexto(e.target.value)}
                            defaultValue={PreviewTexto}
                        />
                        <img id="validacaoTexto" hidden={true} src={sucesso}></img>
                    </div>
                    <div className="inputArea">
                        <input
                            className="input"
                            placeholder="preco"
                            type="number"
                            onChange={e => setPreco(e.target.value)}
                            defaultValue={PreviewPreco}
                        />
                        <img id="validacaoPreco" hidden={true} src={sucesso}></img>
                    </div>
                    {/* <div className="inputArea">
                        <input
                            type="file"
                            placeholder="imagens"
                            onChange={e => setImagens(e.target.value)}
                        />
                        <img id="validacaoImagem" hidden={true} src={sucesso}></img>
                    </div> */}

                    {/* <Upload onUpload={handleUpload}/>
                    { !!uploadedFiles.length && (
                        <FileList files={uploadedFiles}/>
                    )}
                    <FileList /> */}
                    <UploadComponent/>
                    {isEdit?
                        <button id="buttonSubmit" onClick={() => editarProduto()} disabled={false}>Editar</button>
                        : <button id="buttonSubmit" onClick={() => enviarProduto()} disabled={false}>Cadastrar</button>}
                </ContentPage>
            </BoxContent>

        </Container>
    )
};
export default AdminNewProduto;