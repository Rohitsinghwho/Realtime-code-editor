# Real-time-code-editor

This is a real-time code editor in which you can edit or do your coding problems with your friends and others in real-time all you need to do is just press a button.


## Basic Functionality of the application at the moment

- User should be able to collaborate on the editor.
- There should be no conflicts between the editors of different clients.

## Architecture of the System

### Client-server architecture
We are using client server architecture due to a lot of reason over peer to peer architecture:
- Robust security and performance.
- Single source of truth for each client copies i.e server.
- We can implement both pessimistic and optimistic concurrency approaches.
- If a user goes offline then document can be fetched from the server.
- Easy to implement not so complex as P2P.

### Concurrency control Approach
We will be using optimistic concurrency approach just like juypter.This approach is well suited for high latency communication protocols.This approach includes:-
- If client makes any changes to its replica of document locally then the changes will be immeditely applied locally without server's interference. 
- After that the changes will be brodcasted to server and server will serialize all changes and brodcast the changes to all other clients.
- We willnot using synchronization protocol for clients instead we will be doing synchronization of the changes with server and then server will broadcast the changes to other connected clients.
- We will be using CRDT (coflict free replicated data types) for concurrency control.
- This will improve user experience and efficient concurrency control. 


### Tech Stack
#### Front-end
- HTML
- CSS
- TAILWIND CSS
- REACTJS

#### Back-end
- Nodejs
- expressjs
- websockets(real time collaborations)
- Yjs (CRDT library)

#### Database
-Redis (for fast lookups)








