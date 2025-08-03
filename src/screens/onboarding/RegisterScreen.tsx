import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, Platform } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useTheme } from '../../contexts/ThemeContext';
import { AuthStackParamList } from '../../navigator/authNavigator';
import { signUpUser } from '../../services/authService';

type Props = NativeStackScreenProps<AuthStackParamList, 'Register'>;

export default function RegisterScreen({ navigation }: Props) {
  const { theme, mode } = useTheme();
  const [error, setError] = useState<string | null>(null);

  const RegisterSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required(),
    password: Yup.string().min(6).required(),
  });

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <View style={[styles.card, mode === 'light' ? styles.cardLight : styles.cardDark]}>
        <Text style={[styles.title, { color: theme.colors.text }]}>Sign Up</Text>

        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={RegisterSchema}
          onSubmit={async (values) => {
            try {
              setError(null);
              await signUpUser(values.email, values.password);
            } catch (err: any) {
              setError(err.message);
            }
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
            <>
              <TextInput
                placeholder="Email"
                style={[styles.input, { color: theme.colors.text, borderColor: theme.colors.border }]}
                placeholderTextColor={theme.colors.border}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                autoCapitalize="none"
              />
              {touched.email && errors.email && (
                <Text style={[styles.error, { color: theme.colors.notification }]}>{errors.email}</Text>
              )}

              <TextInput
                placeholder="Password"
                secureTextEntry
                style={[styles.input, { color: theme.colors.text, borderColor: theme.colors.border }]}
                placeholderTextColor={theme.colors.border}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
              />
              {touched.password && errors.password && (
                <Text style={[styles.error, { color: theme.colors.notification }]}>{errors.password}</Text>
              )}

              {error && (
                <Text style={[styles.error, { color: theme.colors.notification }]}>{error}</Text>
              )}

              <Pressable style={[styles.button, { backgroundColor: theme.colors.primary }]} onPress={() => handleSubmit()}>
                <Text style={styles.buttonText}>Register</Text>
              </Pressable>

              <Pressable onPress={() => navigation.navigate('Login')}>
                <Text style={[styles.switchText, { color: theme.colors.text }]}>
                  Already have an account? Click here to sign in!
                </Text>
              </Pressable>
            </>
          )}
        </Formik>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    width: '100%',
    maxWidth: 400,
    padding: 24,
    borderRadius: 12,
    borderWidth: 1.5,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOpacity: 0.15,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 5 },
      },
      android: {
        elevation: 6,
      },
      windows: {
        elevation: 6,
      },
    }),
  },
  cardLight: {
    backgroundColor: '#ffffff',
    borderColor: '#e0e0e0',
  },
  cardDark: {
    backgroundColor: '#1c1c1e',
    borderColor: '#2c2c2e',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 24,
    alignSelf: 'center',
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    marginVertical: 8,
  },
  button: {
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  switchText: {
    marginTop: 20,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  error: {
    fontSize: 13,
    marginTop: 4,
  },
});

