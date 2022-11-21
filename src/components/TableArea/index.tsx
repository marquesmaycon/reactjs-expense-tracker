import { Item } from '../../types/Item';
import * as C from './styles';
import {getCurrentMonth} from '../../helpers/dateFilter'
import { TableItem } from '../TableItem';

type Props = {
    list: Item[];
}

export const TableArea = ({list}: Props) => {
    return (
        <C.Table>
            <thead>
                <tr>
                    <C.TableHead width={100}>Data</C.TableHead>
                    <C.TableHead width={130}>Categoria</C.TableHead>
                    <C.TableHead>Título</C.TableHead>
                    <C.TableHead width={150}>Valor</C.TableHead>
                </tr>
            </thead>
            <tbody>
                {list.map((item, index)=>(
                    <TableItem key={index} item={item} />
                ))}
            </tbody>
        </C.Table>
    )
}