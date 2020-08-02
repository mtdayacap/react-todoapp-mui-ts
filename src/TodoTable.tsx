import React from 'react';
import MaterialTable from 'material-table';
import { Checkbox, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

export interface TodoItem {
    id: number,
    description: string;
    completed: boolean;
}

export const TodoTable: React.FC<{ todoList: TodoItem[], updateTodoList: (todo: TodoItem) => void, removeTodo: (todo: TodoItem) => void }> = ({ 
    todoList: todos, 
    updateTodoList,
    removeTodo }) => {

    const renderRemoveTodoButton = (rowData: TodoItem) => {
        return (
            <IconButton color="default" onClick={() => removeTodo(rowData)}>
                <DeleteIcon/>
            </IconButton>
        )
    }

    return (
        <MaterialTable
            columns={[
                { title: 'Mark as done', field: 'completed', width: '25%%', render: rowData => <Checkbox checked={rowData.completed} onChange={event => updateTodoList(rowData)} color="primary" /> },
                { title: 'Description', field: 'description', width: '60%' },
                { title: 'Delete', field: 'delete', width:'15%', render: rowData => renderRemoveTodoButton(rowData)}
            ]}
            data={todos}
            options={{
                toolbar: false,
                paging: false,
                padding: 'dense',
            }}
        />);
};