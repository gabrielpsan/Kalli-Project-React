import React, { useEffect, useState } from 'react'
import { Container, BoxContent, SideMenu, ContentPage, TableData } from '../../styles/AdminUsuarios'
import api from '../../services/api'
import { getToken } from '../../services/auth'
import HeaderComponent from '../../components/Header'
import estatisticas from '../../utils/img/estatisticas.png'
import produtos from '../../utils/img/produtos.png'
import posts from '../../utils/img/posts.png'
import usuarios from '../../utils/img/usuarios.png'
import DataTable, { createTheme } from 'react-data-table-component';
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom"

const AdminConsultaProduto = () => {

    const [error, setError] = useState()
    const [isProdutos, setProdutos] = useState(false)
    const [usuarioTable, setUsuariosTable] = useState([])
    const [usuarioToEdit, setUsuarioToEdit] = useState();
    const [isEdit, setEdit] = useState(false)
    const history = useHistory();
    const goEdit = () => history.push(`admin_produtos_insere/${usuarioToEdit}`);

    createTheme('solarized', {
        text: {
            primary: '#111',
            secondary: '#E3568B',
        },
        highlightOnHover: {
            default: '#EEEEEE',
            text: 'rgba(0, 0, 0, 0.87)',
        },
        action: {
            button: 'rgba(0,0,0,.54)',
            hover: 'red',
            disabled: 'rgba(0,0,0,.12)',
        },
    });

    const customStyles = {
        rows: {
            style: {
                minHeight: '65px', // override the row height

            }
        },
        headCells: {
            style: {
                paddingLeft: '8px', // override the cell padding for head cells
                paddingRight: '8px',
                background: '#E3568B',
                color: '#FFFFFF',
                fontSize: '16px',
                fontWeight: '700',
            },
        },
        cells: {
            style: {
                paddingLeft: '8px', // override the cell padding for data cells
                paddingRight: '8px',
            },
        },
        action: {
            hover: 'cursor-pointer',
        }
    };

    const columns = [
        {
            name: 'Código',
            selector: 'id',
            sortable: true,
        },
        {
            name: 'Nome',
            selector: 'nome',
            sortable: true,
            center: true,
        },
        {
            name: 'Username',
            selector: 'username',
            sortable: true,
            center: true,
        },
        {
            name: 'Email',
            selector: 'email',
            sortable: true,
            center: true,
        },
        {
            name: 'Data Nascimento',
            selector: 'nascimento',
            sortable: true,
            center: true,
        },
        {
            name: 'Telefone',
            selector: 'telefone',
            sortable: true,
            center: true,
        },
    ];

    async function consultaDados() {
        const token = getToken();
        const header_config = { 'x-access-token': `${token}` };

        console.log(header_config);

        await api.get(`/usuario`, { headers: header_config }).then(res => {
            setUsuariosTable(res.data);
            console.log("data: ", res.data);
        });
    }

    // const handleChange = (state) => {
    //     console.log('Selected Rows: ', state.selectedRows);
    //     if (state.selectedRows[0]) {
    //         setEdit(true)
    //         setUsuarioToEdit(state.selectedRows[0].id);
    //     } else {
    //         setEdit(false)
    //     }
    // };


    console.log(usuarioToEdit)
    useEffect(() => {
        consultaDados();
    }, [])

    return (
        <Container>
            <HeaderComponent />
            <BoxContent>
                <SideMenu>
                    <ul>
                        <li><span><img src={estatisticas} /></span><h1><Link to="admin_estatisticas">Estatísticas gerais</Link></h1></li>
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
                    <TableData>
                        <DataTable
                            columns={columns}
                            data={usuarioTable}
                            customStyles={customStyles}
                            // selectableRows={true}
                            pagination={true}
                            paginationRowsPerPageOptions={[5, 10, 15]}
                            // onSelectedRowsChange={handleChange}
                            theme="solarized"
                            highlightOnHover={true}
                            responsive
                        />
                    </TableData>
                    {isEdit ?
                        <button className="buttonEnvia" onClick={() => goEdit()}>Editar</button>
                        : null}
                </ContentPage>
            </BoxContent>

        </Container>
    )
};
export default AdminConsultaProduto;