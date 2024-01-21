import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type IMutation = {
  readonly __typename?: 'Mutation';
  readonly createPost: IPost;
  readonly createWork: IWork;
};


export type IMutationCreatePostArgs = {
  input: INewPost;
};


export type IMutationCreateWorkArgs = {
  input: INewWork;
};

export type INewPost = {
  readonly Author: Scalars['String']['input'];
  readonly Description: Scalars['String']['input'];
  readonly name: Scalars['String']['input'];
  readonly section: Scalars['String']['input'];
};

export type INewWork = {
  readonly description: Scalars['String']['input'];
  readonly image: Scalars['String']['input'];
  readonly name: Scalars['String']['input'];
  readonly section: Scalars['String']['input'];
};

export type IPost = {
  readonly __typename?: 'Post';
  readonly Author: Scalars['String']['output'];
  readonly Description: Scalars['String']['output'];
  readonly createdAt: Scalars['Int']['output'];
  readonly id: Scalars['ID']['output'];
  readonly name: Scalars['String']['output'];
  readonly section: Scalars['String']['output'];
  readonly updatedAt: Scalars['Int']['output'];
};

export type IQuery = {
  readonly __typename?: 'Query';
  readonly lastPosts: ReadonlyArray<IPost>;
  readonly posts: ReadonlyArray<IPost>;
  readonly works: ReadonlyArray<IWork>;
};


export type IQueryLastPostsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
};

export type IWork = {
  readonly __typename?: 'Work';
  readonly createdAt: Scalars['Int']['output'];
  readonly description: Scalars['String']['output'];
  readonly id: Scalars['ID']['output'];
  readonly image: Scalars['String']['output'];
  readonly name: Scalars['String']['output'];
  readonly section: Scalars['String']['output'];
  readonly updatedAt: Scalars['Int']['output'];
};

export type IPostsQueryVariables = Exact<{ [key: string]: never; }>;


export type IPostsQuery = { readonly __typename?: 'Query', readonly posts: ReadonlyArray<{ readonly __typename?: 'Post', readonly id: string, readonly name: string, readonly Author: string, readonly Description: string, readonly section: string, readonly createdAt: number, readonly updatedAt: number }> };

export type ILastPostsQueryVariables = Exact<{ [key: string]: never; }>;


export type ILastPostsQuery = { readonly __typename?: 'Query', readonly lastPosts: ReadonlyArray<{ readonly __typename?: 'Post', readonly id: string, readonly name: string, readonly Author: string, readonly Description: string, readonly section: string, readonly createdAt: number, readonly updatedAt: number }> };

export type IWorksQueryVariables = Exact<{ [key: string]: never; }>;


export type IWorksQuery = { readonly __typename?: 'Query', readonly works: ReadonlyArray<{ readonly __typename?: 'Work', readonly id: string, readonly name: string, readonly section: string, readonly createdAt: number, readonly updatedAt: number, readonly image: string, readonly description: string }> };


export const PostsDocument = gql`
    query Posts {
  posts {
    id
    name
    Author
    Description
    section
    createdAt
    updatedAt
  }
}
    `;

/**
 * __usePostsQuery__
 *
 * To run a query within a React component, call `usePostsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostsQuery({
 *   variables: {
 *   },
 * });
 */
export function usePostsQuery(baseOptions?: Apollo.QueryHookOptions<IPostsQuery, IPostsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IPostsQuery, IPostsQueryVariables>(PostsDocument, options);
      }
export function usePostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IPostsQuery, IPostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IPostsQuery, IPostsQueryVariables>(PostsDocument, options);
        }
export function usePostsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<IPostsQuery, IPostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<IPostsQuery, IPostsQueryVariables>(PostsDocument, options);
        }
export type PostsQueryHookResult = ReturnType<typeof usePostsQuery>;
export type PostsLazyQueryHookResult = ReturnType<typeof usePostsLazyQuery>;
export type PostsSuspenseQueryHookResult = ReturnType<typeof usePostsSuspenseQuery>;
export type PostsQueryResult = Apollo.QueryResult<IPostsQuery, IPostsQueryVariables>;
export const LastPostsDocument = gql`
    query lastPosts {
  lastPosts {
    id
    name
    Author
    Description
    section
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useLastPostsQuery__
 *
 * To run a query within a React component, call `useLastPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useLastPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLastPostsQuery({
 *   variables: {
 *   },
 * });
 */
export function useLastPostsQuery(baseOptions?: Apollo.QueryHookOptions<ILastPostsQuery, ILastPostsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ILastPostsQuery, ILastPostsQueryVariables>(LastPostsDocument, options);
      }
export function useLastPostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ILastPostsQuery, ILastPostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ILastPostsQuery, ILastPostsQueryVariables>(LastPostsDocument, options);
        }
export function useLastPostsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<ILastPostsQuery, ILastPostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ILastPostsQuery, ILastPostsQueryVariables>(LastPostsDocument, options);
        }
export type LastPostsQueryHookResult = ReturnType<typeof useLastPostsQuery>;
export type LastPostsLazyQueryHookResult = ReturnType<typeof useLastPostsLazyQuery>;
export type LastPostsSuspenseQueryHookResult = ReturnType<typeof useLastPostsSuspenseQuery>;
export type LastPostsQueryResult = Apollo.QueryResult<ILastPostsQuery, ILastPostsQueryVariables>;
export const WorksDocument = gql`
    query Works {
  works {
    id
    name
    section
    createdAt
    updatedAt
    image
    description
  }
}
    `;

/**
 * __useWorksQuery__
 *
 * To run a query within a React component, call `useWorksQuery` and pass it any options that fit your needs.
 * When your component renders, `useWorksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWorksQuery({
 *   variables: {
 *   },
 * });
 */
export function useWorksQuery(baseOptions?: Apollo.QueryHookOptions<IWorksQuery, IWorksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IWorksQuery, IWorksQueryVariables>(WorksDocument, options);
      }
export function useWorksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IWorksQuery, IWorksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IWorksQuery, IWorksQueryVariables>(WorksDocument, options);
        }
export function useWorksSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<IWorksQuery, IWorksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<IWorksQuery, IWorksQueryVariables>(WorksDocument, options);
        }
export type WorksQueryHookResult = ReturnType<typeof useWorksQuery>;
export type WorksLazyQueryHookResult = ReturnType<typeof useWorksLazyQuery>;
export type WorksSuspenseQueryHookResult = ReturnType<typeof useWorksSuspenseQuery>;
export type WorksQueryResult = Apollo.QueryResult<IWorksQuery, IWorksQueryVariables>;