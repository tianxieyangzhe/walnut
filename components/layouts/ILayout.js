import { Layout } from "antd";
const { Header, Content, Footer } = Layout;
export default function ILayout({ children }) {
    return (
        <>
            <Layout className="layout">
                <Header>
                    Header
                </Header>
                <Content style={{ padding: '0 50px' }}></Content>
            </Layout>
        </>
    )
}