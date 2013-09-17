echo "##################"
echo "# Delete old H5P #"
echo "##################"
cd ~/dev/contact_button/
rm contact_button.h5p
cp -R classysocial classysocial_backup
mv classysocial_backup classysocial/.
rm -R classysocial/demo classysocial/readme classysocial/README.md classysocial/package.json
chown -R griffen:griffen classysocial
zip -x *.sh .git TODO classysocial/classysocial_backup\* src\* _backup\* -r contact_button.h5p *
mv classysocial/classysocial_backup .
rm -R classysocial
mv classysocial_backup classysocial 
echo "################################"
echo "# New Contact Button is ready! #"
echo "################################"
