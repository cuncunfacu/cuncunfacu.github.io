import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit'
import { db } from '../firebase-config';
import { collection, getDocs, query, where, documentId } from "firebase/firestore";
import { Language, SiteData } from '../interfaces';
import { RootState } from '../app/store';

interface SiteDataState {
    status: string,
    error: null | object,
    selectedLanguage: Language,
    homeData: SiteData["homeData"] | null,
    aboutMeData: SiteData["aboutMeData"] | null
}

export const fetchSiteData = createAsyncThunk('siteData/fetchSiteData',
    async (arg, {getState}): Promise<SiteData> => {
        const { siteData } = getState() as RootState
        const q = query(collection(db, "siteData"), where(documentId(), "==", `siteData${siteData.selectedLanguage}`));
        const querySnapshot = await getDocs(q);
        const homeMetadata = querySnapshot.docs[0].data() as SiteData
        return (homeMetadata)
    })


const siteDataAdapter = createEntityAdapter<SiteData>()

export const siteDataSlice = createSlice({
    name: "siteData",
    initialState: siteDataAdapter.getInitialState<SiteDataState>({
        status: "idle",
        error: null,
        selectedLanguage: Language.English,
        homeData: null,
        aboutMeData: null
    }),
    reducers: {
        onLanguageUpdate: (state, action) => {
            const {newLanguage} = action.payload;
            state.selectedLanguage = newLanguage;
            state.status = 'idle'
        }
    },
    extraReducers: {
        [fetchSiteData.pending.toString()]: (state) => {
            state.status = 'loading'
            state.error = null
        },
        [fetchSiteData.fulfilled.toString()]: (state, action) => {
            if (state.status === 'loading') {
                state.homeData = action.payload.homeData
                state.aboutMeData = action.payload.aboutMeData
                state.status = 'succeeded'
            }
        },
        [fetchSiteData.rejected.toString()]: (state, action) => {
            if (state.status === 'loading') {
                state.status = 'failed'
                state.error = action.payload
            }
        }
    },
})

export const { onLanguageUpdate } = siteDataSlice.actions

export default siteDataSlice.reducer

