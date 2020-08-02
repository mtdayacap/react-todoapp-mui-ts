import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) => (
    createStyles({
        input: {
            height: 38,
            marginRight: theme.spacing(1),
            marginLeft: 0,
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(1)
        }
    })
)
);

export const AddTodoForm: React.FC<{ addTodo: (description: string) => void }> = ({ addTodo }) => {
    const classes = useStyles();
    const [description, setDescription] = useState<string>('');

    const addNewTodo = () => {
        if (description === '') {
            return;
        }
        addTodo(description);
        setDescription('');
    }

    return (
        <div>
            <TextField id="outlined-basic"
                placeholder="Add todo..."
                variant="outlined"
                InputProps={{
                    className: classes.input
                }}
                value={description}
                onChange={e => setDescription(e.target.value)} />

            <Button variant='contained'
                className={classes.input}
                color='primary'
                onClick={addNewTodo}>Add</Button>
        </div>
    );
};
