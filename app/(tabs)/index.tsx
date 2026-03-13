import { View, Text, Image, StyleSheet, StatusBar } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      {/* DECORATIVE BACKGROUND ELEMENTS */}
      <View style={[styles.bgCircle, { top: -80, left: -60, backgroundColor: '#38bdf815' }]} />
      <View style={[styles.bgCircle, { bottom: -100, right: -60, backgroundColor: '#818cf810' }]} />

      <View style={styles.cardContainer}>
        {/* AVATAR SECTION WITH GLOW */}
        <View style={styles.imageOuterRing}>
          <View style={styles.imageInnerRing}>
            <Image 
              source={{ uri: "https://raw.githubusercontent.com/trisasiregar01-arch/test/refs/heads/main/download%20(2).jpg" }} 
              style={styles.profilePic} 
            />
          </View>
        </View>

        {/* IDENTITY SECTION */}
        <View style={styles.textCenter}>
          <Text style={styles.name}>Trisa Deanna Viona Siregar</Text>
          <Text style={styles.nim}>ID: 243303621264</Text>
          
          <View style={styles.tagContainer}>
            <View style={styles.tag}>
              <Text style={styles.tagText}>Sistem Informasi</Text>
            </View>
            <View style={[styles.tag, { backgroundColor: '#1e293b' }]}>
              <Text style={styles.tagText}>Student</Text>
            </View>
          </View>
        </View>

        <View style={styles.divider} />

        {/* MOTIVATION SECTION */}
        <View style={styles.quoteBox}>
          <Text style={styles.quoteIcon}>“</Text>
          <Text style={styles.bioText}>
            My code doesn't always work, but when it does, I don't know why.
          </Text>
          <Text style={[styles.quoteIcon, { textAlign: 'right', marginTop: -10 }]}>”</Text>
        </View>
      </View>
      
      <View style={styles.footerContainer}>
        <Text style={styles.footerText}>Mobile Dev Project</Text>
        <View style={styles.dot} />
        <Text style={styles.footerText}>SDK 50</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#020617', 
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  bgCircle: {
    position: 'absolute',
    width: 250,
    height: 250,
    borderRadius: 125,
  },
  cardContainer: {
    backgroundColor: '#0f172a',
    borderRadius: 35,
    paddingVertical: 40,
    paddingHorizontal: 25,
    width: '100%',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#1e293b',
    // Shadow Mastery (iOS)
    shadowColor: '#38bdf8',
    shadowOffset: { width: 0, height: 20 },
    shadowOpacity: 0.15,
    shadowRadius: 30,
    // Shadow Mastery (Android)
    elevation: 10,
  },
  imageOuterRing: {
    width: 160,
    height: 160,
    borderRadius: 80,
    borderWidth: 1,
    borderColor: '#38bdf850',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  imageInnerRing: {
    width: 148,
    height: 148,
    borderRadius: 74,
    borderWidth: 3,
    borderColor: '#38bdf8',
    padding: 4,
    backgroundColor: '#020617',
  },
  profilePic: {
    width: '100%',
    height: '100%',
    borderRadius: 70,
  },
  textCenter: {
    alignItems: 'center',
    width: '100%',
  },
  name: {
    fontSize: 24,
    fontWeight: '900',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 6,
    letterSpacing: 0.5,
  },
  nim: {
    fontSize: 14,
    color: '#64748b',
    fontWeight: '600',
    letterSpacing: 1.5,
    marginBottom: 15,
  },
  tagContainer: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 25,
  },
  tag: {
    backgroundColor: '#38bdf815',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#38bdf840',
  },
  tagText: {
    color: '#38bdf8',
    fontSize: 11,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  divider: {
    width: '80%',
    height: 1,
    backgroundColor: '#1e293b',
    marginVertical: 10,
  },
  quoteBox: {
    width: '100%',
    paddingHorizontal: 10,
  },
  quoteIcon: {
    fontSize: 40,
    color: '#38bdf8',
    fontFamily: 'serif',
    height: 30,
    opacity: 0.6,
  },
  bioText: {
    color: '#94a3b8',
    textAlign: 'center',
    fontStyle: 'italic',
    lineHeight: 24,
    fontSize: 16,
    paddingHorizontal: 20,
  },
  footerContainer: {
    position: 'absolute',
    bottom: 40,
    flexDirection: 'row',
    alignItems: 'center',
  },
  footerText: {
    color: '#334155',
    fontSize: 12,
    fontWeight: '600',
    letterSpacing: 1,
  },
  dot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#38bdf8',
    marginHorizontal: 10,
  }
});