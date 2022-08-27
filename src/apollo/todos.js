import {gql} from '@apollo/client'

export const ALL_TODO = gql`
	query AllTodos {
	  todos: allTodos {
	    id
	    title
	    completed
	    user_id
	  }
	}
`

export const ADD_TODO = gql`
	mutation AddTodo($title: String!, $userId: ID!, $completed: Boolean!) {
	  newTodo: createTodo(title: $title, user_id: $userId, completed: $completed) {
	    id
	    title
	    completed
	  }
}
`