import { defineNuxtPlugin, useRuntimeConfig } from '#app'
import { initializeApp } from 'firebase/app'
import { getAuth, connectAuthEmulator } from 'firebase/auth'
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore'
import { getStorage, connectStorageEmulator } from 'firebase/storage'
import { getDatabase, connectDatabaseEmulator } from 'firebase/database'
import { initializeAppCheck, ReCaptchaV3Provider } from 'firebase/app-check'

export default defineNuxtPlugin(() => {
	const config = useRuntimeConfig();
	
	const firebaseConfig = {
		apiKey: config.public.firebaseApiKey,
		authDomain: config.public.firebaseAuthDomain,
		projectId: config.public.firebaseProjectId,
		storageBucket: config.public.firebaseStorageBucket,
		messagingSenderId: config.public.firebaseMessagingSenderId,
		appId: config.public.firebaseAppId,
		databaseURL: config.public.firebaseDatabaseUrl
	};
	
	const app = initializeApp(firebaseConfig);
	
	// Emulators
	if (config.public.firebaseEmulators) {
		connectAuthEmulator(getAuth(app), 'http://localhost:9099', { disableWarnings: true });
		connectFirestoreEmulator(getFirestore(app), 'localhost', '8080');
		connectDatabaseEmulator(getDatabase(app), 'localhost', '9000');
		connectStorageEmulator(getStorage(app), 'localhost', '9199');
		self.FIREBASE_APPCHECK_DEBUG_TOKEN = config.public.firebaseAppCheckDebugToken
	}
	
	// App Check
	initializeAppCheck(app, {
		provider: new ReCaptchaV3Provider(config.public.firebaseRecaptchaSiteKey),
		isTokenAutoRefreshEnabled: true
	});
	
	return {
		provide: {
			firebaseApp: app
		}
	}
})
// ~/plugins/00.firebase.client.ts