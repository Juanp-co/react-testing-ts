import { UserList } from "@/components/UserList"
import { render, screen } from "@testing-library/react"
import { server } from "../mocks/server";
import { rest } from "msw";


describe('UserList Rendering',()=> {
    
    it('should have th text juan', async () => {
        render(<UserList />);
        expect(await screen.findByText('juan')).toBeInTheDocument();
        expect(screen.queryByText('No Users')).not.toBeInTheDocument();
    })

    it('should have username juan rendered', async ()=> {
        server.use(
            rest.get('/api/users', (req, res, ctx) => {
                return res(ctx.json([{ id:2, username: 'juanse' }]))
            })
        );
        render(<UserList />);
        expect(await screen.findByText('juanse')).toBeInTheDocument();
    })  

})