import { useReducer, useEffect } from 'react';
import PropTypes from 'prop-types';
import Header from './header';
import Photos from './photos';
import { getUserByUsername, getUserPhotosByUsername } from '../../services/firebase';



export default function Profile({ user}) {
     
    const reducer = (state, newState) => ({...state, ...newState});
    const initialState = {
    profile: {},
    photoCollection: [],
    followerCount: 0
}
    const [{ profile, photosCollection, followerCount}, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {

        async function getProfileInfoAndPhotos() {
            //const [user] = await getUserByUsername(username);
            const photos = await getUserPhotosByUsername(user.username);
            dispatch({ profile: user, photosCollection: photos, followerCount: user.followers.length });

        }

        getProfileInfoAndPhotos();

    },[user.username]);
    return (
        <>
            <Header />
            <Photos photos={photosCollection} />
            <p>{user.username}</p>
        </>
    )
}

Profile.propTypes = {
    user: PropTypes.shape({
        dateCreated: PropTypes.number.isRequired,
        emailAddress: PropTypes.string.isRequired,
        followers: PropTypes.array.isRequired,
        followers: PropTypes.array.isRequired,
        fullName: PropTypes.string.isRequired,
        userId: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,

    }).isRequired
}