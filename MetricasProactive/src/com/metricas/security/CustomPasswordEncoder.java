package com.metricas.security;

import java.util.Arrays;

import org.springframework.security.crypto.password.PasswordEncoder;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;
import java.io.UnsupportedEncodingException;
import javax.crypto.NoSuchPaddingException;
import java.security.InvalidAlgorithmParameterException;
import javax.crypto.IllegalBlockSizeException;
import javax.crypto.BadPaddingException;
import java.security.spec.InvalidKeySpecException;
import java.security.NoSuchProviderException;

import java.security.MessageDigest;
import javax.crypto.SecretKey;
import javax.crypto.spec.SecretKeySpec;
import javax.crypto.Cipher;

public class CustomPasswordEncoder implements PasswordEncoder{

	@Override
	public String encode(CharSequence arg0) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public boolean matches(CharSequence contrasenaPlana, String contrasenaEncriptada) {
		String contrasenaAEncriptar="";
		try {
			contrasenaAEncriptar = encriptarContrasenaMD5(contrasenaPlana.toString());
		} catch (InvalidKeyException e) {
			e.printStackTrace();
		} catch (NoSuchAlgorithmException e) {
			e.printStackTrace();
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		} catch (NoSuchPaddingException e) {
			e.printStackTrace();
		} catch (InvalidAlgorithmParameterException e) {
			e.printStackTrace();
		} catch (IllegalBlockSizeException e) {
			e.printStackTrace();
		} catch (BadPaddingException e) {
			e.printStackTrace();
		} catch (InvalidKeySpecException e) {
			e.printStackTrace();
		} catch (NoSuchProviderException e) {
			e.printStackTrace();
		}
		if(contrasenaAEncriptar.equals(contrasenaEncriptada)){
			return true;
		}else{
			return false;
		}
	}
	
	public String encriptarContrasenaMD5(String contrasenaPlana) throws NoSuchAlgorithmException, UnsupportedEncodingException, NoSuchPaddingException, InvalidKeyException, InvalidAlgorithmParameterException, IllegalBlockSizeException, BadPaddingException, InvalidKeySpecException, NoSuchProviderException{
			
			final String llaveCifrado = "ABCDEFGHIJKLMOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
			
			final MessageDigest md = MessageDigest.getInstance("md5");
			final byte[] digestOfPassword = md.digest(llaveCifrado.getBytes("utf-8"));
			final byte[] llaveBytes = Arrays.copyOf(digestOfPassword, 24);
			for (int j = 0, k = 16; j < 8;) {
				llaveBytes[k++] = llaveBytes[j++];
	        }
			final SecretKey llave = new SecretKeySpec(llaveBytes, "DESede");
	        //final IvParameterSpec iv = new IvParameterSpec(new byte[8]);
	        final Cipher cipher = Cipher.getInstance("DESede/ECB/PKCS5Padding");
	        cipher.init(Cipher.ENCRYPT_MODE, llave);
			final byte[] contrasenaPlanaBytes = contrasenaPlana.getBytes("utf-8");
			final byte[] textoCifradoBytes = cipher.doFinal(contrasenaPlanaBytes);
			final String textoCifradoCadena = new sun.misc.BASE64Encoder().encode(textoCifradoBytes);
			
			return textoCifradoCadena;
		}

}
